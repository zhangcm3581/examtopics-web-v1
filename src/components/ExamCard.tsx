import React from 'react';
import { Link } from 'react-router-dom';
import { Exam } from '../types/exam';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  return (
    <Link 
      to={`/exam/${exam.id}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <DocumentTextIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{exam.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{exam.description}</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {exam.totalQuestions} questions
            </span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full text-gray-600">
              {exam.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};