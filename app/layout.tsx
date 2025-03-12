import { type Metadata } from 'next'
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'praXis',
  description: 'Created By Eirik Pagani Vavik',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}