import { cn } from "@/lib/cn";

type CommandBadgeProps = {
  command: string;
  className?: string;
};

export function CommandBadge({ command, className }: CommandBadgeProps) {
  return (
    <code
      className={cn(
        "inline-flex items-center rounded-md border border-border-subtle bg-surface-elevated px-2.5 py-1 font-mono text-[0.8rem] text-brand-pink",
        className
      )}
    >
      {command}
    </code>
  );
}
