"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cmd = { name: string; desc: string; cat: string };

export function CommandSearch({ commands }: { commands: Cmd[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    commands.forEach((c) => set.add(c.cat));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [commands]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return commands.filter((c) => {
      const matchesTerm = !term || `${c.name} ${c.desc} ${c.cat}`.toLowerCase().includes(term);
      const matchesCat = !cat || c.cat === cat;
      return matchesTerm && matchesCat;
    });
  }, [q, cat, commands]);

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          placeholder="Buscar comandos..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-brand-500"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat(null)}
            className={`rounded-md border px-3 py-1 text-xs transition ${cat === null ? "border-brand-500 bg-brand-500/20 text-white" : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"}`}
          >
            Todas
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c === cat ? null : c)}
              className={`rounded-md border px-3 py-1 text-xs transition ${cat === c ? "border-brand-500 bg-brand-500/20 text-white" : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 text-xs text-zinc-400">{filtered.length} resultado(s)</div>

      <div className="relative mt-4">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.name}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.12 }}
                className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{c.name}</h3>
                  <span className="text-xs text-zinc-400">{c.cat}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{c.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
