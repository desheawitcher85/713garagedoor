interface DefinitionBoxProps {
  term: string
  definition: string
}

export function DefinitionBox({ term, definition }: DefinitionBoxProps) {
  return (
    <div className="bg-cream border border-cream rounded-lg p-4 my-6">
      <p className="text-sm text-steel">
        <strong className="text-ink">{term}:</strong> {definition}
      </p>
    </div>
  )
}
