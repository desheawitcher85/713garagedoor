interface ComparisonRow {
  factor: string
  option1: string
  option2: string
}

interface ComparisonTableProps {
  heading?: string
  col1Label: string
  col2Label: string
  rows: ComparisonRow[]
}

export function ComparisonTable({
  heading,
  col1Label,
  col2Label,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      {heading && (
        <h3 className="font-heading text-2xl text-ink mb-4">{heading}</h3>
      )}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-ink text-white">
            <th className="text-left py-3 px-4 font-semibold rounded-tl">Factor</th>
            <th className="text-left py-3 px-4 font-semibold">{col1Label}</th>
            <th className="text-left py-3 px-4 font-semibold rounded-tr">{col2Label}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-paper" : "bg-white"}
            >
              <td className="py-3 px-4 font-semibold text-ink border-b border-cream">{row.factor}</td>
              <td className="py-3 px-4 text-steel border-b border-cream">{row.option1}</td>
              <td className="py-3 px-4 text-steel border-b border-cream">{row.option2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
