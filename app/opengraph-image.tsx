import { ImageResponse } from "next/og";
import { getSiteUrl } from "@/lib/site";

export const runtime = "edge";
export const alt = "ZynxFox";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  const siteUrl = getSiteUrl();
  const logoUrl = new URL("/zynxfox.png", siteUrl).toString();
  const studioUrl = new URL("/eclipse-studios.png", siteUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 22%, rgba(91,84,232,0.34), transparent 28%), radial-gradient(circle at 82% 26%, rgba(232,84,122,0.26), transparent 30%), linear-gradient(135deg, #07080D 0%, #090B16 55%, #0D1020 100%)",
          color: "#E8EAF6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(91,84,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,84,232,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.7,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -120,
            top: -40,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(232,84,122,0.34) 0%, rgba(232,84,122,0) 70%)",
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -120,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(91,84,232,0.34) 0%, rgba(91,84,232,0) 70%)",
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "64%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <img
                src={logoUrl}
                width="64"
                height="64"
                alt="ZynxFox"
                style={{ borderRadius: 18 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    color: "#7B80B0",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                  }}
                >
                  Sitio oficial
                </span>
                <span
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  ZynxFox
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 78,
                  lineHeight: 0.95,
                  fontWeight: 900,
                  maxWidth: 700,
                  backgroundImage: "linear-gradient(135deg, #5B54E8, #E8547A)",
                  color: "transparent",
                  backgroundClip: "text",
                }}
              >
                El bot que tu servidor necesitaba.
              </div>

              <div
                style={{
                  display: "flex",
                  maxWidth: 720,
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#B5B9D9",
                }}
              >
                Documentacion, soporte, updates, terminos y privacidad para comunidades de Discord.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 20,
                color: "#8C91BB",
              }}
            >
              <img
                src={studioUrl}
                width="34"
                height="34"
                alt="Eclipse Studios"
                style={{ borderRadius: 999 }}
              />
              <span>Un proyecto de Eclipse Studios</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 300,
                height: 300,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "linear-gradient(180deg, rgba(15,17,32,0.9), rgba(9,11,22,0.72))",
                boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={logoUrl}
                width="200"
                height="200"
                alt="Logo ZynxFox"
                style={{ borderRadius: 32 }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
