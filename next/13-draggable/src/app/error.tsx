'use client' // Error components must be Client Components
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    router.push('/signin')
  }, [error, router])
 
  return (
    <div>Redirect To SignIn...</div>
  )
}