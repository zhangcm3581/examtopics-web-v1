import { QuestionGroup as QuestionGroupType } from '@/types/question';
import { QuestionCard } from './QuestionCard';

interface QuestionGroupProps {
  group: QuestionGroupType;
}

export function QuestionGroup({ group }: QuestionGroupProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{group.title}</h2>
      <div className="space-y-4">
        {group.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}