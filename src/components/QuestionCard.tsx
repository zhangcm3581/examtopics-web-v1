import React, { useState } from 'react';
import { Question } from '../types/exam';
import { QuestionHeader } from './question/QuestionHeader';
import { QuestionContent } from './question/QuestionContent';
import { QuestionExplanation } from './question/QuestionExplanation';
import { ShowAnswerButton } from './question/ShowAnswerButton';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerSelect = (label: string) => {
    setSelectedAnswer(label);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <QuestionHeader index={index} />
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <QuestionContent
              content={question.content}
              options={question.options}
              selectedAnswer={selectedAnswer}
              showAnswer={showAnswer}
              correctAnswer={question.correctAnswer}
              onAnswerSelect={handleAnswerSelect}
            />

            <ShowAnswerButton
              showAnswer={showAnswer}
              onClick={toggleAnswer}
            />

            {showAnswer && (
              <QuestionExplanation
                answer={question.explanation.answer}
                detail={question.explanation.detail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};