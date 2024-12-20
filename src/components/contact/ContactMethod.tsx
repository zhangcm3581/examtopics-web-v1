'use client'

import { CopyButton } from '../common/CopyButton'

interface ContactMethodProps {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

export function ContactMethod({ icon, label, value, href }: ContactMethodProps) {
  return (
    <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start">
          <div className="mt-1">
            {icon}
          </div>
          <div className="ml-3 sm:ml-4 flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900">{label}</div>
            {href ? (
              <a href={href} className="text-blue-600 hover:text-blue-700 break-all">
                {value}
              </a>
            ) : (
              <div className="text-blue-600 break-all">{value}</div>
            )}
          </div>
        </div>
        <div className="mt-2 pl-9 sm:pl-0 sm:mt-0 sm:ml-4">
          <CopyButton text={value} />
        </div>
      </div>
    </div>
  )
}