import React from 'react';
import { Topic } from '../types/exam';
import { QuestionCard } from './QuestionCard';

interface TopicSectionProps {
  topic: Topic;
}

export const TopicSection: React.FC<TopicSectionProps> = ({ topic }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{topic.title}</h2>
      <div className="space-y-6">
        {topic.questions.map((question, index) => (
          <QuestionCard 
            key={question.id} 
            question={question}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};