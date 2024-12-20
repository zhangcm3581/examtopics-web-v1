'use client'

import { QuestionOption } from '@/types/exam'
import clsx from 'clsx'

interface OptionButtonProps {
  option: QuestionOption
  isSelected: boolean
  isCorrect: boolean
  showAnswer: boolean
  onSelect: (label: string) => void
}

export function OptionButton({ 
  option, 
  isSelected, 
  isCorrect, 
  showAnswer, 
  onSelect
}: OptionButtonProps) {
  return (
    <button
      onClick={() => onSelect(option.label)}
      className={clsx(
        'w-full text-left p-2 sm:p-3 rounded-lg border transition-colors',
        {
          'bg-green-50 border-green-200': showAnswer && isCorrect,
          'bg-red-50 border-red-200': showAnswer && isSelected && !isCorrect,
          'border-[#007bff] bg-[#007bff]/10': !showAnswer && isSelected,
          'hover:bg-gray-50 border-gray-200': !showAnswer && !isSelected
        }
      )}
    >
      <div className="flex items-center">
        <span className="font-medium mr-2 text-[13px] sm:text-base">
          {option.label}.
        </span>
        <span className="text-[11px] sm:text-sm">
          {option.content}
        </span>
      </div>
    </button>
  )
}