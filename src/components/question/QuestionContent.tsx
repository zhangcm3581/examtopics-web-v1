import React from 'react';
import { QuestionOption } from '../../types/exam';
import clsx from 'clsx';

interface QuestionContentProps {
  content: string;
  options: QuestionOption[];
  selectedAnswer: string | null;
  showAnswer: boolean;
  correctAnswer: string;
  onAnswerSelect: (label: string) => void;
}

export const QuestionContent: React.FC<QuestionContentProps> = ({
  content,
  options,
  selectedAnswer,
  showAnswer,
  correctAnswer,
  onAnswerSelect,
}) => {
  return (
    <div>
      <p className="text-[13px] sm:text-base text-gray-900 font-medium mb-2 sm:mb-4">{content}</p>
      
      <div className="space-y-2 sm:space-y-3">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => onAnswerSelect(option.label)}
            className={clsx(
              'w-full text-left p-2 sm:p-3 rounded-lg border transition-colors',
              {
                'bg-green-50 border-green-200': showAnswer && option.label === correctAnswer,
                'bg-red-50 border-red-200': showAnswer && selectedAnswer === option.label && option.label !== correctAnswer,
                'border-[#007bff] bg-[#007bff]/10': !showAnswer && selectedAnswer === option.label,
                'hover:bg-gray-50 border-gray-200': !showAnswer && selectedAnswer !== option.label
              }
            )}
          >
            <span className="font-medium mr-2 text-[13px] sm:text-base">{option.label}.</span>
            <span className="text-[11px] sm:text-sm">{option.content}</span>
          </button>
        ))}
      </div>
    </div>
  );
}