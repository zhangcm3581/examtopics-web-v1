'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/hooks/useLanguage'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const { language } = useLanguage()

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  }

  const disabledStyle = {
    backgroundColor: '#e9ecef',
    borderColor: '#dee2e6',
    color: '#6c757d',
    cursor: 'not-allowed',
    opacity: '0.65',
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all"
          style={currentPage === 1 ? disabledStyle : buttonStyle}
        >
          <ChevronLeftIcon className="h-5 w-5 mr-1" />
          {language === 'en' ? 'Previous' : '上一页'}
        </button>
        <div className="hidden md:flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            {language === 'en' 
              ? `Page ${currentPage} of ${totalPages}`
              : `第 ${currentPage} 页，共 ${totalPages} 页`
            }
          </span>
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all"
          style={currentPage === totalPages ? disabledStyle : buttonStyle}
        >
          {language === 'en' ? 'Next' : '下一页'}
          <ChevronRightIcon className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  )
}