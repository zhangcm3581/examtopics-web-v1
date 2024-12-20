import Link from 'next/link'

export function ViewAllLink() {
  return (
    <div className="flex justify-end mb-2 sm:mb-4">
      <Link 
        href="/all-exams" 
        className="text-[11px] sm:text-base text-blue-500 hover:text-blue-600"
      >
        View All Exams »
      </Link>
    </div>
  )
}