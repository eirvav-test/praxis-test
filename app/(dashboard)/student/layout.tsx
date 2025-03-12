import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Student Dashboard',
  description: 'Created By Eirik Pagani Vavik',
}

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <div className="min-h-screen">
        {children}
        <Toaster />
      </div>
    </ClerkProvider>
  )
}