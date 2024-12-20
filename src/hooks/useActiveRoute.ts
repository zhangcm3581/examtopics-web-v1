'use client'

import { usePathname } from 'next/navigation'

export function useActiveRoute() {
  const pathname = usePathname()
  
  return {
    isActive: (path: string) => {
      if (path === '/') {
        return pathname === '/'
      }
      return pathname.startsWith(path)
    }
  }
}