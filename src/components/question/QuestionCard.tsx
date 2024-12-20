'use client'

import { useState } from 'react'
import { Question } from '@/types/exam'
import { QuestionHeader } from './QuestionHeader'
import { QuestionContent } from './content/QuestionContent'
import { QuestionExplanation } from './QuestionExplanation'
import { ShowAnswerButton } from './ShowAnswerButton'

interface QuestionCardProps {
  question: Question
  index: number
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const handleAnswerSelect = (label: string) => {
    if (question.type === 'multiple') {
      setSelectedAnswers(prev => 
        prev.includes(label)
          ? prev.filter(l => l !== label)
          : [...prev, label]
      )
    } else {
      setSelectedAnswers([label])
    }
  }

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <QuestionHeader index={index} />
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <QuestionContent
              content={question.content}
              options={question.options}
              selectedAnswers={selectedAnswers}
              showAnswer={showAnswer}
              correctAnswer={question.correctAnswer}
              onAnswerSelect={handleAnswerSelect}
              type={question.type}
            />

            <ShowAnswerButton
              showAnswer={showAnswer}
              onClick={toggleAnswer}
            />

            {showAnswer && (
              <QuestionExplanation
                answer={question.explanation.answer}
                detail={question.explanation.detail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}