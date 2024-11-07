'use client'

import { useState } from 'react'
import { Dumbbell, MessageSquare, Utensils, Home, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Workouts from './workouts/page'
import OneOnOneTraining from '@/components/dashboard/OneOnOneTraning'
import Diet from '@/components/dashboard/Diet'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case 'workouts':
        return <Workouts />
      case 'training':
        return <OneOnOneTraining />
      case 'diet':
        return <Diet />
      default:
        return (
          <>
            <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-medium mb-6">Welcome back, Jane!</h3>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Workouts</CardTitle>
                  <Dumbbell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,420</div>
                  <p className="text-xs text-muted-foreground">+10% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Minutes</CardTitle>
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">237</div>
                  <p className="text-xs text-muted-foreground">+5% from last week</p>
                </CardContent>
              </Card>
            </div>

            {/* Progress Tracking */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your fitness journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-200">Weight Goal</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">75%</span>
                    </div>
                    <Progress value={75} className="w-full" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-200">Workout Consistency</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">90%</span>
                    </div>
                    <Progress value={90} className="w-full" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Detailed Progress</Button>
              </CardFooter>
            </Card>
          </>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <nav className="mt-5 px-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left ${
              activeSection === 'dashboard'
                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
            } focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150`}
          >
            <Home className="mr-4 h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition ease-in-out duration-150" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('workouts')}
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left ${
              activeSection === 'workouts'
                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
            } focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150`}
          >
            <Dumbbell className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition ease-in-out duration-150" />
            Workouts
          </button>
          <button
            onClick={() => setActiveSection('training')}
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left ${
              activeSection === 'training'
                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
            } focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150`}
          >
            <MessageSquare className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition ease-in-out duration-150" />
            1:1 Training
          </button>
          <button
            onClick={() => setActiveSection('diet')}
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md w-full text-left ${
              activeSection === 'diet'
                ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
            } focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600 transition ease-in-out duration-150`}
          >
            <Utensils className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition ease-in-out duration-150" />
            Diet
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute top-15 left-3 z-40">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setActiveSection('dashboard')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <Home className="mr-4 h-6 w-6" />
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    setActiveSection('workouts')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <Dumbbell className="mr-4 h-6 w-6" />
                  Workouts
                </button>
                <button
                  onClick={() => {
                    setActiveSection('training')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <MessageSquare className="mr-4 h-6 w-6" />
                  1:1 Training
                </button>
                <button
                  onClick={() => {
                    setActiveSection('diet')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <Utensils className="mr-4 h-6 w-6" />
                  Diet
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}