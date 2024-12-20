'use client'

import { useLanguage } from '@/hooks/useLanguage'

interface QuestionTextProps {
  content: string
  type: 'single' | 'multiple'
}

export function QuestionText({ content, type }: QuestionTextProps) {
  const { language } = useLanguage()
  
  return (
    <p className="text-[13px] sm:text-base text-gray-900 font-medium mb-2 sm:mb-4">
      {content}
      {type === 'multiple' && (
        <span className="ml-2 text-[11px] sm:text-sm text-gray-500">
          {language === 'en' ? '(Multiple Choice)' : '（多选题）'}
        </span>
      )}
    </p>
  )
}