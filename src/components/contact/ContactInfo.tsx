import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ContactMethod } from './ContactMethod'

interface ContactMethodData {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}

export function ContactInfo() {
  const contactMethods: ContactMethodData[] = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-gray-500" />,
      label: 'Email',
      value: 'zhangcm3581@gmail.com',
      href: 'mailto:zhangcm3581@gmail.com'
    },
    {
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          className="h-6 w-6 text-gray-500"
          fill="currentColor"
        >
          <path d="M8.667 11.511c.276-2.084.655-4.941 1.014-7.771.673.228 1.345.338 2.319.338.976 0 1.647-.11 2.32-.338.358 2.83.737 5.687 1.013 7.771-.562.031-1.177.052-1.706.052h-3.254c-.529 0-1.144-.021-1.706-.052zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.963 14.528c-.436 1.168-1.133 2.229-2.097 3.195-.967.967-2.028 1.664-3.195 2.097-1.205.457-2.49.691-3.817.691-1.327 0-2.612-.234-3.817-.691-1.168-.436-2.229-1.133-3.195-2.097-.967-.967-1.664-2.028-2.097-3.195-.457-1.205-.691-2.49-.691-3.817 0-1.327.234-2.612.691-3.817.436-1.168 1.133-2.229 2.097-3.195.967-.967 2.028-1.664 3.195-2.097 1.205-.457 2.49-.691 3.817-.691 1.327 0 2.612.234 3.817.691 1.168.436 2.229 1.133 3.195 2.097.967.967 1.664 2.028 2.097 3.195.457 1.205.691 2.49.691 3.817 0 1.327-.234 2.612-.691 3.817z"/>
        </svg>
      ),
      label: 'WeChat',
      value: 'Neoos03'
    }
  ]

  return (
    <div className="space-y-6">
      {contactMethods.map((method) => (
        <ContactMethod 
          key={method.label}
          {...method}
        />
      ))}
    </div>
  )
}