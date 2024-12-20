'use client'

import { ExamDetailHeader } from '@/components/exam/ExamDetailHeader'
import { QuestionList } from '@/components/question/QuestionList'
import { getQuestionsByExamAndLanguage } from '@/lib/questions'
import { getExamInfo } from '@/lib/exam'
import { useLanguage } from '@/hooks/useLanguage'
import { notFound } from 'next/navigation'

interface Props {
  params: { examId: string }
}

export default function ExamPage({ params }: Props) {
  const { language } = useLanguage()
  const questions = getQuestionsByExamAndLanguage(params.examId, language)
  const examInfo = getExamInfo(params.examId, language)

  // If no exam info is found, show 404
  if (!examInfo) {
    return notFound()
  }

  return (
    <div className="max-w-content mx-auto px-[15px] sm:px-6 lg:px-8 py-3 sm:py-8">
      <ExamDetailHeader
        title={`${examInfo.title} ${language === 'en' ? 'Practice Questions' : '练习题'}`}
        lastUpdated={examInfo.lastUpdated}
        vendor={examInfo.vendor}
        examCode={params.examId.replace(/-[a-z]{2}$/, '').toUpperCase()}
        examName={examInfo.title}
        totalQuestions={questions.length}
      />

      <QuestionList questions={questions} />
    </div>
  )
}