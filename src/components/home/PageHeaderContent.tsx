'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { PageHeader } from '@/components/common/PageHeader'

const content = {
  en: {
    title: 'CERTIFICATION EXAM PRACTICE QUESTIONS',
    subtitle: 'Available in English and Chinese'
  },
  zh: {
    title: '认证考试题库',
    subtitle: '提供中英文版本'
  }
}

export function PageHeaderContent() {
  const { language } = useLanguage()
  const translations = content[language]

  return (
    <PageHeader 
      title={translations.title}
      subtitle={translations.subtitle}
    />
  )
}