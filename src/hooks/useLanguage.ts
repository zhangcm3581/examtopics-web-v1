'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useRouter } from 'next/navigation'

type Language = 'en' | 'zh'

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'zh',
      setLanguage: (lang) => {
        set({ language: lang })
      }
    }),
    {
      name: 'language-storage'
    }
  )
)