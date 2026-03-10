import fs from "fs";
import path from "path";
import bundledCommands from "@/data/commands.generated.json";

export type Cmd = { name: string; desc: string; cat: string };

function extractSlashMeta(source: string, fallbackName: string): { name: string; desc: string } {
  const nameMatch = source.match(/\.setName\(["'`]([^"'`]+)["'`]\)/);
  const descMatch = source.match(/\.setDescription\(["'`]([^"'`]+)["'`]\)/);
  return {
    name: nameMatch?.[1] || fallbackName,
    desc: descMatch?.[1] || "Descripción no disponible.",
  };
}

function extractPrefixMeta(source: string, fallbackName: string): { name: string; desc: string } {
  const nameMatch = source.match(/\bname\s*:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = source.match(/\bdescription\s*:\s*["'`]([^"'`]+)["'`]/);
  return {
    name: nameMatch?.[1] || fallbackName,
    desc: descMatch?.[1] || "Descripción no disponible.",
  };
}

function safeReadDir(target: string) {
  try {
    return fs.readdirSync(target, { withFileTypes: true });
  } catch {
    return [] as fs.Dirent[];
  }
}

function isCommandSource(name: string) {
  return name.endsWith(".ts") || name.endsWith(".js");
}

function scanSlashCommands(dir: string): Cmd[] {
  const result: Cmd[] = [];
  const categories = safeReadDir(dir).filter((entry) => entry.isDirectory());
  for (const category of categories) {
    const categoryPath = path.join(dir, category.name);
    const files = safeReadDir(categoryPath).filter((entry) => entry.isFile() && isCommandSource(entry.name));
    for (const file of files) {
      try {
        const source = fs.readFileSync(path.join(categoryPath, file.name), "utf8");
        const fallbackName = path.basename(file.name, path.extname(file.name));
        const meta = extractSlashMeta(source, fallbackName);
        result.push({
          name: meta.name.startsWith("/") ? meta.name : `/${meta.name}`,
          desc: meta.desc,
          cat: category.name,
        });
      } catch {}
    }
  }
  return result;
}

function scanPrefixCommands(dir: string): Cmd[] {
  const result: Cmd[] = [];
  const files = safeReadDir(dir).filter((entry) => entry.isFile() && isCommandSource(entry.name));
  for (const file of files) {
    try {
      const source = fs.readFileSync(path.join(dir, file.name), "utf8");
      const fallbackName = path.basename(file.name, path.extname(file.name));
      const meta = extractPrefixMeta(source, fallbackName);
      result.push({ name: meta.name, desc: meta.desc, cat: "prefix" });
    } catch {}
  }
  return result;
}

function dedupeCommands(commands: Cmd[]) {
  const map = new Map<string, Cmd>();
  for (const cmd of commands) {
    const key = cmd.name.replace(/^\//, "").toLowerCase();
    const existing = map.get(key);
    if (!existing) {
      map.set(key, cmd);
      continue;
    }
    const isNewSlash = cmd.name.startsWith("/");
    const isOldSlash = existing.name.startsWith("/");
    if (isNewSlash && !isOldSlash) map.set(key, cmd);
  }
  return Array.from(map.values()).sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));
}

export function scanAllCommands(): Cmd[] {
  const result: Cmd[] = [];
  const root = process.cwd();
  const slashCandidates = [
    process.env.COMMANDS_DIR,
    path.resolve(root, "..", "commands"),
    path.resolve(root, "..", "Commands"),
  ].filter(Boolean) as string[];

  for (const base of slashCandidates) result.push(...scanSlashCommands(base));

  const prefixCandidates = [
    process.env.PREFIX_COMMANDS_DIR,
    path.resolve(root, "..", "Commands_prefix"),
    path.resolve(root, "..", "commands_prefix"),
  ].filter(Boolean) as string[];

  for (const base of prefixCandidates) result.push(...scanPrefixCommands(base));

  if (result.length === 0) {
    return dedupeCommands((bundledCommands as Cmd[]) || []);
  }

  return dedupeCommands(result);
}
