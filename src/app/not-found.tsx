import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-[15px] sm:px-6 lg:px-8 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <Link 
        href="/"
        className="text-blue-500 hover:text-blue-600 font-medium"
      >
        Return Home
      </Link>
    </div>
  )
}