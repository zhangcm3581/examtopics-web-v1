interface QuestionHeaderProps {
  index: number
}

export function QuestionHeader({ index }: QuestionHeaderProps) {
  return (
    <div className="w-full rounded-t-lg" style={{ backgroundColor: '#007bff' }}>
      <h3 className="text-white py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-lg font-medium">
        Question #{index + 1}
      </h3>
    </div>
  )
}