import { QuestionOption } from '@/types/exam'
import { QuestionText } from './QuestionText'
import { OptionsGroup } from './OptionsGroup'

interface QuestionContentProps {
  content: string
  options: QuestionOption[]
  selectedAnswers: string[]
  showAnswer: boolean
  correctAnswer: string
  onAnswerSelect: (label: string) => void
  type: 'single' | 'multiple'
}

export function QuestionContent({
  content,
  options,
  selectedAnswers,
  showAnswer,
  correctAnswer,
  onAnswerSelect,
  type
}: QuestionContentProps) {
  // Split correctAnswer string into array for multiple choice questions
  const correctAnswers = correctAnswer.split(',').map(a => a.trim())

  return (
    <div>
      <QuestionText content={content} type={type} />
      <OptionsGroup
        options={options}
        selectedAnswers={selectedAnswers}
        showAnswer={showAnswer}
        correctAnswers={correctAnswers}
        onAnswerSelect={onAnswerSelect}
        type={type}
      />
    </div>
  )
}