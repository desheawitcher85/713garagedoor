import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/jpeg"

export default function OGImage() {
  const imgBuffer = readFileSync(
    join(process.cwd(), "public/images/dusk-shot-of-the-houston-texas-skyline-34d9a2-1024.jpg")
  )
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "#0f1a2e",
        }}
      >
        {/* Background: Houston skyline */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15,26,46,0.72)",
            display: "flex",
          }}
        />
        {/* Logo lockup */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "0 96px",
            gap: "48px",
          }}
        >
          {/* 713 badge */}
          <div
            style={{
              background: "#ef6b1c",
              borderRadius: "10px",
              padding: "22px 32px 18px",
              fontSize: "128px",
              color: "#ffffff",
              fontWeight: 900,
              letterSpacing: "-4px",
              lineHeight: "0.9",
              fontFamily: "system-ui, sans-serif",
              flexShrink: 0,
            }}
          >
            713
          </div>
          {/* Wordmark */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                fontSize: "96px",
                color: "#ffffff",
                fontWeight: 900,
                letterSpacing: "6px",
                textTransform: "uppercase",
                lineHeight: "0.88",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              GARAGE DOOR
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#8a9aa6",
                fontWeight: 600,
                letterSpacing: "8px",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              HOUSTON, TX · 713-535-9301
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
