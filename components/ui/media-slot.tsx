import { ImagePlus, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

type MediaSlotProps = {
  title: string;
  description?: string;
  kind?: "imagen" | "video";
  ratio?: "16/9" | "4/3" | "1/1";
  className?: string;
};

export function MediaSlot({
  title,
  description,
  kind = "imagen",
  ratio = "16/9",
  className,
}: MediaSlotProps) {
  const Icon = kind === "video" ? PlayCircle : ImagePlus;

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-card border border-dashed border-border-subtle bg-surface-card/85",
        className
      )}
    >
      <div
        className="relative flex items-center justify-center p-6"
        style={{ aspectRatio: ratio }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,84,232,0.16),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(232,84,122,0.14),transparent_40%)]" />
        <div className="relative z-10 flex max-w-sm flex-col items-center gap-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border-subtle bg-surface-elevated text-brand-purple">
            <Icon aria-hidden size={24} />
          </span>
          <Badge variant="beta">Próximamente</Badge>
          <div className="space-y-1">
            <p className="font-medium text-text-primary">{title}</p>
            <p className="text-sm text-text-secondary">
              {description ?? "Espacio reservado para capturas, flujos guiados o demos futuras."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
