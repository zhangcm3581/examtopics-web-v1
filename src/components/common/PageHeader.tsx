interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-3 sm:mb-8 text-center sm:text-left">
      <h1 className="text-lg sm:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-4">
        {title}
      </h1>
      <p className="text-[11px] sm:text-base text-gray-600">
        {subtitle.includes('not') ? (
          <>
            ExamTopics is <span className="font-semibold">not</span> affiliated or certified by any certification provider.
          </>
        ) : (
          subtitle
        )}
      </p>
      <div className="h-0.5 sm:h-1 w-12 sm:w-24 bg-blue-500 mt-1.5 sm:mt-4 mx-auto sm:mx-0" />
    </div>
  )
}