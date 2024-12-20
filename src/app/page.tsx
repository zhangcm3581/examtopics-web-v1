import { PageHeaderContent } from '@/components/home/PageHeaderContent'
import { ExamLanguageSection } from '@/components/home/ExamLanguageSection'

export default function Home() {
  return (
    <div className="max-w-content mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-8">
      <PageHeaderContent />
      <ExamLanguageSection />
    </div>
  )
}