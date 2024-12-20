'use client'

import { ContactInfo } from '@/components/contact/ContactInfo'
import { useLanguage } from '@/hooks/useLanguage'

const content = {
  en: {
    title: 'Contact Us',
    description: "Get in touch with us for any questions or support regarding certification exam preparation",
    intro: "Have questions about our exam preparation materials? Need assistance? We're here to help! Feel free to reach out through any of the following channels:",
    footer: "We strive to respond to all inquiries within 24 hours. Whether you need clarification on exam questions, have suggestions for improvement, or want to report an issue, we're here to assist you."
  },
  zh: {
    title: '联系我们',
    description: '如果您有任何关于认证考试准备的问题或需要支持，请随时与我们联系',
    intro: '对我们的考试准备材料有疑问？需要帮助？我们随时为您服务！请通过以下任何渠道与我们联系：',
    footer: '我们会在24小时内回复所有询问。无论您是需要解答考试题目，还是有改进建议，或是想要报告问题，我们都会为您提供帮助。'
  }
}

export default function ContactPage() {
  const { language } = useLanguage()
  const translations = content[language]

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          {translations.title}
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <p className="text-gray-600 mb-8 text-center">
            {translations.intro}
          </p>

          <ContactInfo />

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>{translations.footer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}