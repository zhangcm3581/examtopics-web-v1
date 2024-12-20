import Image from 'next/image'
import Link from 'next/link'
import { ExamLink } from '@/types/exam'
import { ExamLinkList } from './ExamLinkList'

interface CertificationProviderProps {
  title: string
  logo: string
  allExamsLink: string
  examLinks: ExamLink[]
}

export function CertificationProvider({
  title,
  logo,
  allExamsLink,
  examLinks,
}: CertificationProviderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 sm:p-6">
      <div className="flex justify-center mb-2 sm:mb-6">
        <Image 
          src={logo} 
          alt={title} 
          width={64}
          height={64}
          className="h-12 sm:h-16 w-auto object-contain" 
        />
      </div>
      
      <Link 
        href={allExamsLink} 
        className="text-blue-500 hover:text-blue-600 text-[11px] sm:text-sm mb-1 sm:mb-2 block text-center sm:text-left"
      >
        All {title} Exams
      </Link>
      
      <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-4 text-center sm:text-left">
        Top {title} Certification Exams
      </h3>
      
      <ExamLinkList examLinks={examLinks} />
    </div>
  )
}