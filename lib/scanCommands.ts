import fs from "fs";
import path from "path";

export type Cmd = { name: string; desc: string; cat: string };

function extractSlashMeta(source: string, fallbackName: string): { name: string; desc: string } {
  const nameMatch = source.match(/\.setName\(["'`]([^"'`]+)["'`]\)/);
  const descMatch = source.match(/\.setDescription\(["'`]([^"'`]+)["'`]\)/);
  const name = nameMatch?.[1] || fallbackName;
  const desc = descMatch?.[1] || "Descripción no disponible.";
  return { name, desc };
}

function extractPrefixMeta(source: string, fallbackName: string): { name: string; desc: string } {
  const nameMatch = source.match(/\bname\s*:\s*["'`]([^"'`]+)["'`]/);
  const descMatch = source.match(/\bdescription\s*:\s*["'`]([^"'`]+)["'`]/);
  const name = nameMatch?.[1] || fallbackName;
  const desc = descMatch?.[1] || "Descripción no disponible.";
  return { name, desc };
}

function safeReadDir(p: string) {
  try {
    return fs.readdirSync(p, { withFileTypes: true });
  } catch {
    return [] as fs.Dirent[];
  }
}

function scanSlashCommands(dir: string): Cmd[] {
  const result: Cmd[] = [];
  const cats = safeReadDir(dir).filter((d) => d.isDirectory());
  for (const cat of cats) {
    const catPath = path.join(dir, cat.name);
    const files = safeReadDir(catPath).filter((f) => f.isFile() && f.name.endsWith(".js"));
    for (const file of files) {
      const filePath = path.join(catPath, file.name);
      try {
        const src = fs.readFileSync(filePath, "utf8");
        const base = path.basename(file.name, ".js");
        const meta = extractSlashMeta(src, base);
        result.push({ name: meta.name.startsWith("/") ? meta.name : `/${meta.name}`, desc: meta.desc, cat: cat.name });
      } catch {}
    }
  }
  return result;
}

function scanPrefixCommands(dir: string): Cmd[] {
  const result: Cmd[] = [];
  const files = safeReadDir(dir).filter((f) => f.isFile() && f.name.endsWith(".js"));
  for (const file of files) {
    try {
      const src = fs.readFileSync(path.join(dir, file.name), "utf8");
      const base = path.basename(file.name, ".js");
      const meta = extractPrefixMeta(src, base);
      result.push({ name: meta.name, desc: meta.desc, cat: "prefix" });
    } catch {}
  }
  return result;
}

export function scanAllCommands(): Cmd[] {
  const result: Cmd[] = [];
  const root = process.cwd(); // web/
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

  // Deduplicar por nombre (ignorando prefijo '/') priorizando comandos slash
  const map = new Map<string, Cmd>();
  for (const cmd of result) {
    const key = cmd.name.replace(/^\//, "").toLowerCase();
    const existing = map.get(key);
    if (!existing) {
      map.set(key, cmd);
      continue;
    }
    // Si ya existe, preferimos el que comienza con '/'
    const isNewSlash = cmd.name.startsWith("/");
    const isOldSlash = existing.name.startsWith("/");
    if (isNewSlash && !isOldSlash) map.set(key, cmd);
  }
  const unique = Array.from(map.values());
  unique.sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));
  return unique;
}
