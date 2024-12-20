'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'

export function FooterLinks() {
  const { language } = useLanguage()

  const links = {
    en: [
      { href: '/', label: 'Home' },
      { href: '/contact', label: 'Contact' },
    ],
    zh: [
      { href: '/', label: '首页' },
      { href: '/contact', label: '联系我们' },
    ]
  }

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">
        {language === 'en' ? 'Quick Links' : '快速链接'}
      </h3>
      <ul className="space-y-2">
        {links[language].map(link => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}