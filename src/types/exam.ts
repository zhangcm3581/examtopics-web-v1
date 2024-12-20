export interface QuestionOption {
  label: string;
  content: string;
}

export interface Question {
  id: string;
  examId: string;
  content: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: {
    answer: string;
    detail: string;
  };
}

export interface ExamLink {
  id: string;
  title: string;
}

export interface Provider {
  id: string;
  title: string;
  logo: string;
  allExamsLink: string;
  examLinks: ExamLink[];
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  category: string;
  topic: string;
  questions: Question[];
  vendor?: string;
  examCode?: string;
  lastUpdated?: string;
}