import { QuestionOption } from '@/types/exam'
import { OptionButton } from './OptionButton'

interface OptionsGroupProps {
  options: QuestionOption[]
  selectedAnswers: string[]
  showAnswer: boolean
  correctAnswers: string[]
  onAnswerSelect: (label: string) => void
}

export function OptionsGroup({
  options,
  selectedAnswers,
  showAnswer,
  correctAnswers,
  onAnswerSelect
}: OptionsGroupProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {options.map((option) => (
        <OptionButton
          key={option.label}
          option={option}
          isSelected={selectedAnswers.includes(option.label)}
          isCorrect={correctAnswers.includes(option.label)}
          showAnswer={showAnswer}
          onSelect={onAnswerSelect}
        />
      ))}
    </div>
  )
}