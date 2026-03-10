import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Apoyo",
  description: "Formas de apoyar a ZynxFox.",
};

export default function ApoyoPage() {
  const donateUrl = process.env.NEXT_PUBLIC_DONATE_URL || "#";
  const patreonUrl = process.env.NEXT_PUBLIC_PATREON_URL || "#";
  const kofiUrl = process.env.NEXT_PUBLIC_KOFI_URL || "#";

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        eyebrow="Apoyo"
        title="Apoya a ZynxFox"
        subtitle="Si quieres ayudar al proyecto, aquí encontrarás las opciones disponibles para hacerlo."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={donateUrl}>Donación directa</Button>
        <Button href={patreonUrl} variant="secondary">
          Patreon
        </Button>
        <Button href={kofiUrl} variant="secondary">
          Ko-fi
        </Button>
      </div>
    </div>
  );
}
