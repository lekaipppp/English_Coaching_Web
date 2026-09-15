import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#13233F",
          color: "#D68A2C",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
