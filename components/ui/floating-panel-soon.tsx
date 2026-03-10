import { LayoutPanelTop } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FloatingPanelSoon() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden md:block">
      <button
        type="button"
        disabled
        className="floating-panel-soon"
        aria-label="Panel web pronto"
      >
        <span className="floating-panel-soon__icon" aria-hidden>
          <LayoutPanelTop size={16} />
        </span>
        <span className="min-w-0 space-y-1 text-left">
          <span className="block text-sm font-medium text-text-primary">Panel web pronto</span>
          <span className="floating-panel-soon__copy block text-[0.78rem] text-text-secondary">
            La configuracion sigue dentro de Discord
          </span>
        </span>
        <Badge variant="beta">Proximamente</Badge>
      </button>
    </div>
  );
}
