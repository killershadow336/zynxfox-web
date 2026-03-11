import { ImageResponse } from "next/og";
import foxLogo from "@/public/zynxfox.png";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 36,
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
            borderRadius: 34,
            border: "1px solid rgba(131,142,206,0.18)",
            background: "linear-gradient(180deg, rgba(14,18,31,0.96), rgba(8,10,18,0.98))",
            padding: "44px 48px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(91,84,232,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(91,84,232,0.08) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              opacity: 0.28,
            }}
          />

          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              gap: 30,
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 690,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9fa7cb",
                  }}
                >
                  Sitio oficial
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 18,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  <span style={{ fontSize: 70, fontWeight: 900 }}>ZynxFox</span>
                  <span style={{ marginTop: 10, fontSize: 60, fontWeight: 800 }}>
                    Bot de Discord
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: 28,
                    maxWidth: 620,
                    fontSize: 28,
                    lineHeight: 1.35,
                    color: "#aeb6db",
                  }}
                >
                  Documentacion, soporte, updates, terminos y privacidad para comunidades de Discord.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", gap: 14 }}>
                  {["Documentacion", "Soporte", "Terminos", "Privacidad"].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 18px",
                        borderRadius: 9999,
                        border: "1px solid rgba(131,142,206,0.18)",
                        background: "rgba(10,12,21,0.72)",
                        color: "#c9d0f6",
                        fontSize: 22,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#d6dcff",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: 12,
                      height: 12,
                      borderRadius: 9999,
                      background: "linear-gradient(135deg, #5b54e8, #e8547a)",
                      boxShadow: "0 0 18px rgba(91,84,232,0.5)",
                    }}
                  />
                  <span>Preview limpio y alineado</span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: 300,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 220,
                  height: 220,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 9999,
                  border: "1px solid rgba(131,142,206,0.16)",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.16), rgba(91,84,232,0.08) 35%, rgba(8,10,18,0.18) 100%)",
                  boxShadow: "inset 0 0 80px rgba(91,84,232,0.18), 0 18px 40px rgba(0,0,0,0.28)",
                }}
              >
                <img
                  src={foxLogo.src}
                  alt="ZynxFox"
                  style={{
                    display: "flex",
                    width: 132,
                    height: 132,
                    objectFit: "contain",
                    filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.3))",
                    transform: "rotate(-8deg)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#f6d488",
                  }}
                >
                  Eclipse Studios
                </span>
                <span
                  style={{
                    maxWidth: 280,
                    textAlign: "right",
                    fontSize: 20,
                    lineHeight: 1.4,
                    color: "#9fa7cb",
                  }}
                >
                  ZynxFox para comunidades de Discord
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
