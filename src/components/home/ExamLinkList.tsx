import Link from 'next/link'
import { ExamLink } from '@/types/exam'

interface ExamLinkListProps {
  examLinks: ExamLink[]
}

export function ExamLinkList({ examLinks }: ExamLinkListProps) {
  return (
    <div className="space-y-1 sm:space-y-2">
      {examLinks.map((exam) => (
        <Link
          key={exam.id}
          href={`/exam/${exam.id}`}
          className="text-blue-500 hover:text-blue-600 text-[11px] sm:text-sm block text-center sm:text-left break-words leading-tight sm:leading-normal"
        >
          {exam.title}
        </Link>
      ))}
    </div>
  )
}