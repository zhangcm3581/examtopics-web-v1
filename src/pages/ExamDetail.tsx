import React from 'react';
import { useParams } from 'react-router-dom';
import { exams } from '../data/exams';
import { QuestionCard } from '../components/QuestionCard';
import { Pagination } from '../components/Pagination';
import { usePagination } from '../hooks/usePagination';
import { ExamDetailHeader } from '../components/exam/ExamDetailHeader';
import { Navbar } from '../components/layout/Navbar';

export const ExamDetail: React.FC = () => {
  const { examId } = useParams<{ examId: string }>();
  const exam = exams.find(e => e.id === examId);

  const {
    currentPage,
    totalPages,
    currentItems: currentQuestions,
    handlePageChange,
  } = usePagination({
    items: exam?.questions || [],
    itemsPerPage: 10,
  });

  if (!exam) {
    return (
      <div className="max-w-content mx-auto px-[15px] sm:px-6 lg:px-8">
        <p className="text-gray-600">Exam not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-content mx-auto px-[15px] sm:px-6 lg:px-8 py-3 sm:py-8">
        <ExamDetailHeader
          title={`${exam.title} Actual Exam Questions`}
          lastUpdated="Dec. 13, 2024"
          vendor="Amazon"
          examCode={exam.title}
          examName={exam.title}
          totalQuestions={85}
        />

        <div className="space-y-4 sm:space-y-6">
          {currentQuestions.map((question, index) => (
            <QuestionCard 
              key={question.id} 
              question={question}
              index={(currentPage - 1) * 10 + index}
            />
          ))}
        </div>

        <div className="mt-4 sm:mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};