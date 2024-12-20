'use client'

import { NavLink } from './NavLink'
import { LanguageSwitch } from '../language/LanguageSwitch'
import { useLanguage } from '@/hooks/useLanguage'

export function Navbar() {
  const { language } = useLanguage()

  const menuItems = {
    en: {
      home: 'HOME',
      contact: 'CONTACT'
    },
    zh: {
      home: '首页',
      contact: '联系我们'
    }
  }

  const menu = menuItems[language]

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-content mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex items-center space-x-4 sm:space-x-8 text-xs sm:text-base">
            <NavLink href="/">{menu.home}</NavLink>
            <NavLink href="/contact">{menu.contact}</NavLink>
          </div>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  )
}