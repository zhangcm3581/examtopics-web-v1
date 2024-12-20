'use client'

import { useLanguage } from '@/hooks/useLanguage'

export function FooterSocial() {
  const { language } = useLanguage()

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">
        {language === 'en' ? 'Connect With Us' : '关注我们'}
      </h3>
      <div className="flex space-x-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Twitter
        </a>
      </div>
    </div>
  )
}