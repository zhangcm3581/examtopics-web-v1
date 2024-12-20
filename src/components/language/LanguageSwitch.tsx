'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useRouter, usePathname } from 'next/navigation'

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLang: 'en' | 'zh') => {
    setLanguage(newLang)
    
    // If on an exam page, update the URL to include the new language
    if (pathname.startsWith('/exam/')) {
      const examId = pathname.split('/').pop()
      const baseExamId = examId?.replace(/-[a-z]{2}$/, '')
      if (baseExamId) {
        router.push(`/exam/${baseExamId}-${newLang}`)
        return
      }
    }
    
    // For other pages, redirect to home
    router.push('/')
  }

  return (
    <div className="flex items-center space-x-2">
      <GlobeAltIcon className="h-5 w-5 text-gray-400" />
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'zh')}
        className="bg-transparent text-sm text-gray-300 hover:text-white focus:ring-0 focus:outline-none cursor-pointer"
      >
        <option value="en" className="text-gray-900">English</option>
        <option value="zh" className="text-gray-900">中文</option>
      </select>
    </div>
  )
}