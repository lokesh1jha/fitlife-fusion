'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            FitLife Fusion
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">
                  Dashboard
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={session.user?.image || ''} alt={session.user?.name || 'User avatar'} />
                      <AvatarFallback>{session.user?.name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => signOut()}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login" passHref>
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            {session ? (
              <>
                <Link href="/dashboard" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">
                  Dashboard
                </Link>
                <Button variant="ghost" className="w-full justify-start" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" passHref>
                  <Button variant="ghost" className="w-full justify-start">Log In</Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}