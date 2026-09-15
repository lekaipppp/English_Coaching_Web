import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#13233F",
          color: "#F3F1E9",
        }}
      >
        <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
          <div style={{ width: 14, height: 60, background: "#D68A2C" }} />
          <div style={{ width: 14, height: 100, background: "#2C6E68" }} />
          <div style={{ width: 14, height: 40, background: "#B4432E" }} />
          <div style={{ width: 14, height: 80, background: "#33436A" }} />
        </div>
        <div style={{ fontSize: 64, fontWeight: 600 }}>Crosswire</div>
        <div style={{ fontSize: 32, color: "#F3F1E9CC", marginTop: 16 }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
