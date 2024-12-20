'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link 
      href={href}
      className={`whitespace-nowrap transition-colors ${
        isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}