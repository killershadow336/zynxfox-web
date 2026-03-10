import { Badge } from "@/components/ui/badge";

type CapabilityMarqueeProps = {
  items: string[];
};

export function CapabilityMarquee({ items }: CapabilityMarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="capability-marquee mt-6" aria-label="Capacidades destacadas de ZynxFox">
      <div className="capability-marquee__fade capability-marquee__fade--left" aria-hidden />
      <div className="capability-marquee__fade capability-marquee__fade--right" aria-hidden />
      <div className="capability-marquee__track">
        {track.map((item, index) => (
          <div key={`${item}-${index}`} className="capability-marquee__item">
            <Badge variant={index % 3 === 0 ? "new" : index % 2 === 0 ? "beta" : "default"}>
              {item}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
