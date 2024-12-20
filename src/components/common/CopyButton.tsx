'use client'

import { useState } from 'react'
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/hooks/useLanguage'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const { language } = useLanguage()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md 
        bg-gray-100 hover:bg-gray-200 transition-all duration-200 ${className}`}
      title={copied 
        ? language === 'en' ? 'Copied!' : '已复制！'
        : language === 'en' ? 'Copy to clipboard' : '复制到剪贴板'
      }
    >
      {copied ? (
        <>
          <ClipboardDocumentCheckIcon className="h-4 w-4 text-green-500" />
          <span className="text-xs text-green-500 whitespace-nowrap">
            {language === 'en' ? 'Copied!' : '已复制！'}
          </span>
        </>
      ) : (
        <>
          <ClipboardIcon className="h-4 w-4 text-gray-600" />
          <span className="text-xs text-gray-600 whitespace-nowrap">
            {language === 'en' ? 'Copy' : '复制'}
          </span>
        </>
      )}
    </button>
  )
}