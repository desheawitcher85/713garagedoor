import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-3px",
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
