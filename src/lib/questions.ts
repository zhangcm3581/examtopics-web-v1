import { ExamQuestion } from '@/types/question'
import { saaC03EnQuestions } from '@/data/questions/aws-saa-c03/en'
import { saaC03ZhQuestions } from '@/data/questions/aws-saa-c03/zh'

export function getQuestionsByExamAndLanguage(examId: string, language: 'en' | 'zh'): ExamQuestion[] {
  // Remove the language suffix from examId for matching
  const baseExamId = examId.replace(/-[a-z]{2}$/, '')
  
  switch (baseExamId) {
    case 'aws-saa-c03':
      return language === 'en' ? saaC03EnQuestions : saaC03ZhQuestions
    default:
      return []
  }
}

export function getQuestionById(examId: string, questionId: string, language: 'en' | 'zh'): ExamQuestion | undefined {
  const questions = getQuestionsByExamAndLanguage(examId, language)
  return questions.find(q => q.id === questionId)
}