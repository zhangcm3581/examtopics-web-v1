'use client'

import { useLanguage } from '@/hooks/useLanguage'

interface QuestionExplanationProps {
  answer: string
  detail: string
}

export function QuestionExplanation({ answer, detail }: QuestionExplanationProps) {
  const { language } = useLanguage()

  // Extract just the answer letters from the full answer text
  const answerLetters = answer
    .replace(/^(Correct Answer:|正确答案是?:?)\s*/i, '')
    .trim()

  return (
    <div 
      className="mt-2 sm:mt-3 p-2 sm:p-4 rounded-lg border" 
      style={{ backgroundColor: 'rgba(0, 123, 255, 0.05)', borderColor: 'rgba(0, 123, 255, 0.2)' }}
    >
      <p className="text-[11px] sm:text-sm text-gray-700 font-bold mb-1 sm:mb-2">
        {language === 'en' 
          ? `Correct Answer: ${answerLetters}`
          : `正确答案: ${answerLetters}`
        }
      </p>
      <div className="text-[11px] sm:text-sm text-gray-700">
        <span className="font-bold">
          {language === 'en' ? 'Note: ' : '解析: '}
        </span>
        <span>{detail}</span>
      </div>
    </div>
  )
}