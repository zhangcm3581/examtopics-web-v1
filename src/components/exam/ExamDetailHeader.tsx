import { ExamHeaderInfo } from './ExamHeaderInfo'

interface ExamDetailHeaderProps {
  title: string
  lastUpdated: string
  vendor: string
  examCode: string
  examName: string
  totalQuestions: number
}

export function ExamDetailHeader({
  title,
  lastUpdated,
  vendor,
  examCode,
  examName,
  totalQuestions,
}: ExamDetailHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-8 mb-4 sm:mb-8">
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-lg sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          {title}
        </h1>
        <h2 className="text-sm sm:text-xl text-gray-600">
          Last updated on {lastUpdated}
        </h2>
      </div>

      <div className="space-y-2 sm:space-y-4">
        <ExamHeaderInfo label="Vendor:" value={vendor} />
        <ExamHeaderInfo label="Exam Code:" value={examCode} />
        <ExamHeaderInfo label="Exam Name:" value={examName} />
        <ExamHeaderInfo label="Exam Questions:" value={totalQuestions.toString()} />
      </div>
    </div>
  )
}