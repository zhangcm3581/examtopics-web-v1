'use client'

import { useLanguage } from '@/hooks/useLanguage'

interface ShowAnswerButtonProps {
  showAnswer: boolean
  onClick: () => void
}

export function ShowAnswerButton({ showAnswer, onClick }: ShowAnswerButtonProps) {
  const { language } = useLanguage()

  const buttonText = showAnswer 
    ? language === 'en' ? 'Hide Answer' : '隐藏答案'
    : language === 'en' ? 'Show Answer' : '显示答案'

  return (
    <button
      onClick={onClick}
      className="mt-2 sm:mt-4 inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium rounded-md 
        transition-colors"
      style={{
        backgroundColor: showAnswer ? '#ffffff' : '#007bff',
        color: showAnswer ? '#007bff' : '#ffffff',
        border: `1px solid ${showAnswer ? '#007bff' : 'transparent'}`,
      }}
    >
      {buttonText}
    </button>
  )
}