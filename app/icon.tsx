import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ef6b1c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 17,
            fontWeight: 900,
            letterSpacing: "-0.5px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          713
        </span>
      </div>
    ),
    { ...size }
  )
}
