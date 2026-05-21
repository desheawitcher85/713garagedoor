// Brand guide: "Stacked Block" lockup — Archivo Black badge + Barlow Condensed wordmark.
// Colors adapted to site palette: rust (#ef6b1c) replaces Signal Red, site ink/mist for type.
interface LogoProps {
  variant?: "light" | "dark"
  size?: "xs" | "sm"
}

export function Logo({ variant = "light", size = "xs" }: LogoProps) {
  const wordColor = variant === "dark" ? "#f4f1ea" : "#0f1a2e"
  const tagColor  = "#8a9aa6"

  if (size === "xs") {
    return (
      <span className="inline-flex items-center gap-[7px]" aria-label="713 Garage Door">
        <span
          className="font-archivo text-[25px] leading-[0.92] text-white select-none"
          style={{
            background: "#ef6b1c",
            letterSpacing: "-0.025em",
            padding: "5px 6px 4px",
            borderRadius: "2px",
          }}
        >
          713
        </span>
        <span
          className="font-barlow font-black text-[20px] uppercase leading-[0.92]"
          style={{ letterSpacing: "0.005em", color: wordColor }}
        >
          Garage Door
        </span>
      </span>
    )
  }

  // sm — used in footer and wider contexts
  return (
    <span className="inline-flex items-center gap-[10px]" aria-label="713 Garage Door">
      <span
        className="font-archivo text-[36px] leading-[0.92] text-white select-none"
        style={{
          background: "#ef6b1c",
          letterSpacing: "-0.025em",
          padding: "7px 9px 6px",
          borderRadius: "2px",
        }}
      >
        713
      </span>
      <span className="flex flex-col leading-[0.92]">
        <span
          className="font-barlow font-black text-[29px] uppercase"
          style={{ letterSpacing: "0.005em", color: wordColor }}
        >
          Garage Door
        </span>
        <span
          className="font-barlow font-semibold text-[10px] uppercase"
          style={{ letterSpacing: "0.32em", color: tagColor, marginTop: "5px" }}
        >
          Repair · Houston, TX
        </span>
      </span>
    </span>
  )
}
