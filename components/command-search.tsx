"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CommandBadge } from "@/components/ui/command-badge";
import { cn } from "@/utils/cn";

type Cmd = { name: string; desc: string; cat: string };

export function CommandSearch({ commands }: { commands: Cmd[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    commands.forEach((command) => set.add(command.cat));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [commands]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return commands.filter((command) => {
      const haystack = `${command.name} ${command.desc} ${command.cat}`.toLowerCase();
      return (!term || haystack.includes(term)) && (!category || command.cat === category);
    });
  }, [category, commands, query]);

  return (
    <div className="mt-10 space-y-6">
      <div className="surface-card p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="block flex-1">
            <span className="sr-only">Buscar comandos</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nombre, descripción o categoría"
              className="w-full rounded-card border border-border-subtle bg-surface-elevated px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-brand-purple"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === null} onClick={() => setCategory(null)}>
              Todas
            </FilterChip>
            {categories.map((item) => (
              <FilterChip
                key={item}
                active={category === item}
                onClick={() => setCategory(item === category ? null : item)}
              >
                {item}
              </FilterChip>
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-text-secondary">
          {filtered.length} resultado(s) sobre datos reales del bot.
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((command) => (
          <Card key={command.name} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-3">
                <CommandBadge command={command.name} />
                <p className="text-sm text-text-secondary">{command.desc}</p>
              </div>
              <Badge variant="default">{command.cat}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-fast ease-out-quint",
        active
          ? "border-brand-purple bg-brand-purple/10 text-brand-purple"
          : "border-border-subtle bg-surface-card text-text-secondary hover:border-brand-purple hover:text-text-primary"
      )}
    >
      {children}
    </button>
  );
}
