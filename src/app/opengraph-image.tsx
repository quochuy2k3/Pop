import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Proof of Presence (PoP) — Giải pháp xác minh hiện diện thực tế chống gian lận check-in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Subtle gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(59,130,246,0.12) 0%, transparent 100%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(232,232,227,0.4)",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          PI GROUP — Software Division
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#e8e8e3",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Proof of Presence
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(232,232,227,0.5)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Giải pháp xác minh hiện diện thực tế — Chống gian lận check-in
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 60px",
            fontSize: 14,
            color: "rgba(232,232,227,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          <span>Võ Quốc Huy — Front-End Developer</span>
          <span>LandX — 03.2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
