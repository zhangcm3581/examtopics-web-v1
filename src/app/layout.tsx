import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { FooterSection } from '@/components/layout/Footer/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exam Topics - Practice Certification Exams',
  description: 'Practice certification exam questions for AWS, Cisco, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  )
}