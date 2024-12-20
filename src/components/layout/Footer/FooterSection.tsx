'use client'

import { useLanguage } from '@/hooks/useLanguage'

export function FooterSection() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a 
              href="https://www.examtopics.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ExamTopics
            </a>
            <span>|</span>
            <a 
              href="/contact" 
              className="hover:text-white transition-colors"
            >
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </a>
          </div>
          <div className="text-xs sm:text-sm text-center">
            © {currentYear} ExamTopics {language === 'zh' && '版权所有'}
          </div>
        </div>
      </div>
    </footer>
  )
}