import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZynxFox";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const chips = ["Documentacion", "Soporte", "Terminos", "Privacidad"];

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 18% 20%, rgba(91,84,232,0.28), transparent 28%), radial-gradient(circle at 84% 22%, rgba(232,84,122,0.24), transparent 30%), linear-gradient(135deg, #07080D 0%, #090B16 50%, #0D1020 100%)",
          color: "#E8EAF6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(91,84,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(91,84,232,0.06) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            opacity: 0.8,
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            padding: "58px 64px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "67%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #5B54E8, #E8547A)",
                  color: "#FFFFFF",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                ZF
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    color: "#8E93BE",
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
                  fontSize: 82,
                  lineHeight: 0.95,
                  fontWeight: 900,
                  maxWidth: 760,
                  color: "#FFFFFF",
                }}
              >
                El bot que tu servidor necesitaba.
              </div>

              <div
                style={{
                  display: "flex",
                  maxWidth: 760,
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "#B4B8D9",
                }}
              >
                Documentacion, soporte, updates, terminos y privacidad para comunidades de Discord.
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                {chips.map((chip) => (
                  <div
                    key={chip}
                    style={{
                      display: "flex",
                      padding: "10px 16px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(15,17,32,0.84)",
                      color: "#D7DBF3",
                      fontSize: 18,
                    }}
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#8C91BB",
                fontSize: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 28,
                  height: 28,
                  borderRadius: 999,
                  background: "linear-gradient(135deg, #F5D06B, #E88E2E)",
                  boxShadow: "0 0 24px rgba(245,208,107,0.35)",
                }}
              />
              <span>Un proyecto de Eclipse Studios</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 260,
                height: 260,
                borderRadius: 44,
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(91,84,232,0.2), rgba(232,84,122,0.18)), rgba(15,17,32,0.92)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 36px 90px rgba(0,0,0,0.35)",
                color: "#FFFFFF",
                fontSize: 92,
                fontWeight: 900,
              }}
            >
              ZF
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
