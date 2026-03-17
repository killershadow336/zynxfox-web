import { ImageResponse } from "next/og";
import { getSiteUrl } from "@/lib/site";

export const size = {
  width: 1600,
  height: 900,
};

export const contentType = "image/png";
export const runtime = "edge";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 42,
          background:
            "radial-gradient(circle at top left, rgba(91,84,232,0.22), transparent 32%), radial-gradient(circle at top right, rgba(232,84,122,0.18), transparent 28%), linear-gradient(180deg, #090b12 0%, #05060a 100%)",
          color: "#f4f7ff",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flex: 1,
            borderRadius: 40,
            border: "1px solid rgba(131,142,206,0.18)",
            background: "linear-gradient(180deg, rgba(14,18,31,0.96), rgba(8,10,18,0.98))",
            padding: "54px 58px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(91,84,232,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(91,84,232,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: 0.28,
            }}
          />

          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              gap: 36,
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 900,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9fa7cb",
                  }}
                >
                  Sitio oficial
                </span>
                <span
                  style={{
                    marginTop: 20,
                    fontSize: 88,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                  }}
                >
                  ZynxFox
                </span>
                <span
                  style={{
                    marginTop: 12,
                    fontSize: 74,
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                  }}
                >
                  Bot de Discord
                </span>
                <span
                  style={{
                    marginTop: 32,
                    maxWidth: 820,
                    fontSize: 34,
                    lineHeight: 1.35,
                    color: "#aeb6db",
                  }}
                >
                  ZynxFox reúne avisos para creadores, moderación, tickets y sistemas automáticos en una sola experiencia.
                </span>
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                {["Notificaciones", "Moderación", "Tickets", "Sistemas"].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 22px",
                      borderRadius: 9999,
                      border: "1px solid rgba(131,142,206,0.18)",
                      background: "rgba(10,12,21,0.72)",
                      color: "#c9d0f6",
                      fontSize: 26,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: 360,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 260,
                  height: 260,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 9999,
                  border: "1px solid rgba(131,142,206,0.16)",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), rgba(91,84,232,0.08) 35%, rgba(8,10,18,0.18) 100%)",
                }}
              >
                <img
                  src={`${getSiteUrl()}/zynxfox.png`}
                  alt="ZynxFox"
                  style={{
                    display: "flex",
                    width: 156,
                    height: 156,
                    objectFit: "contain",
                    filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.3))",
                    transform: "rotate(-8deg)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 21,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#f6d488",
                  }}
                >
                  Eclipse Studios
                </span>
                <span
                  style={{
                    maxWidth: 320,
                    textAlign: "right",
                    fontSize: 24,
                    lineHeight: 1.4,
                    color: "#9fa7cb",
                  }}
                >
                  El único bot que tu servidor necesita
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
