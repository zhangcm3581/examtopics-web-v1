interface ExamHeaderInfoProps {
  label: string
  value: string
}

export function ExamHeaderInfo({ label, value }: ExamHeaderInfoProps) {
  return (
    <div className="flex border-b border-gray-200 py-2 sm:py-3">
      <div className="w-32 sm:w-48">
        <span className="text-[11px] sm:text-base text-gray-700 font-medium">
          {label}
        </span>
      </div>
      <div className="flex-1">
        <span className="text-[11px] sm:text-base text-gray-900">
          {value}
        </span>
      </div>
    </div>
  )
}