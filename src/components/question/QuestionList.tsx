'use client'

import { Question } from '@/types/exam'
import { usePagination } from '@/hooks/usePagination'
import { QuestionCard } from './QuestionCard'
import { Pagination } from '../common/Pagination'

interface QuestionListProps {
  questions: Question[]
}

export function QuestionList({ questions }: QuestionListProps) {
  const {
    currentPage,
    totalPages,
    currentItems: currentQuestions,
    handlePageChange,
  } = usePagination({
    items: questions,
    itemsPerPage: 3 // Show 3 questions per page
  })

  return (
    <div>
      <div className="space-y-4 sm:space-y-6 mb-6">
        {currentQuestions.map((question, index) => (
          <QuestionCard 
            key={question.id} 
            question={question}
            index={(currentPage - 1) * 3 + index} // Calculate correct question number
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}