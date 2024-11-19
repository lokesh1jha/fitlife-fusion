'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dumbbell, MessageSquare, Utensils, Home, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log("session", session)
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])


  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <nav className="mt-5 px-2">
          <Link href="/dashboard" passHref>
            <button className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150">
              <Home className="mr-4 h-6 w-6" />
              Dashboard
            </button>
          </Link>
          <Link href="/dashboard/workouts" passHref>
            <button className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150">
              <Dumbbell className="mr-4 h-6 w-6" />
              Workouts
            </button>
          </Link>
          <Link href="/dashboard/training" passHref>
            <button className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150">
              <MessageSquare className="mr-4 h-6 w-6" />
              1:1 Training
            </button>
          </Link>
          <Link href="/dashboard/diet" passHref>
            <button className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150">
              <Utensils className="mr-4 h-6 w-6" />
              Diet
            </button>
          </Link>
        </nav>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="absolute top-15 left-3 z-40">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard" passHref>
                <button className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md">
                  <Home className="mr-4 h-6 w-6" />
                  Dashboard
                </button>
              </Link>
              <Link href="/dashboard/workouts" passHref>
                <button className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md">
                  <Dumbbell className="mr-4 h-6 w-6" />
                  Workouts
                </button>
              </Link>
              <Link href="/dashboard/training" passHref>
                <button className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md">
                  <MessageSquare className="mr-4 h-6 w-6" />
                  1:1 Training
                </button>
              </Link>
              <Link href="/dashboard/diet" passHref>
                <button className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md">
                  <Utensils className="mr-4 h-6 w-6" />
                  Diet
                </button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  )
}
