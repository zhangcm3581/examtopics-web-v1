'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { CertificationProvider } from './CertificationProvider'
import { getProvidersByLanguage } from '@/lib/data'

export function ExamLanguageSection() {
  const { language } = useLanguage()
  const providers = getProvidersByLanguage(language)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 lg:gap-8">
      {providers.map((provider) => (
        <CertificationProvider
          key={provider.id}
          {...provider}
        />
      ))}
    </div>
  )
}