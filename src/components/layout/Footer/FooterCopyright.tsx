'use client'

import { useLanguage } from '@/hooks/useLanguage'

export function FooterCopyright() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <div className="text-sm text-center">
      {language === 'en' ? (
        <p>© {currentYear} ExamTopics</p>
      ) : (
        <p className="whitespace-nowrap">© {currentYear} ExamTopics 版权所有</p>
      )}
    </div>
  )
}