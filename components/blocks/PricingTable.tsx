interface PricingRow {
  service: string
  lowEnd: string
  typical: string
  highEnd: string
  notes: string
}

interface PricingTableProps {
  rows: PricingRow[]
  heading: string
}

export function PricingTable({ rows, heading }: PricingTableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded border border-cream">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-ink text-white">
            <th colSpan={4} className="px-4 py-3 text-left font-heading text-lg tracking-wide">
              {heading}
            </th>
          </tr>
          <tr className="bg-cream text-ink text-xs uppercase tracking-wide font-semibold">
            <th className="px-4 py-2 text-left w-[35%]">Service</th>
            <th className="px-4 py-2 text-right">Low</th>
            <th className="px-4 py-2 text-right">Typical</th>
            <th className="px-4 py-2 text-right">High</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
              <td className="px-4 py-3 font-medium text-ink">
                {row.service}
                {row.notes && (
                  <span className="block text-xs text-mist font-normal mt-0.5">{row.notes}</span>
                )}
              </td>
              <td className="px-4 py-3 text-right text-steel">{row.lowEnd}</td>
              <td className="px-4 py-3 text-right font-semibold text-ink">{row.typical}</td>
              <td className="px-4 py-3 text-right text-steel">{row.highEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
