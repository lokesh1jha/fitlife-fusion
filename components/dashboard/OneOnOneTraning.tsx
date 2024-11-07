import { useState } from 'react'
import { format, addDays } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const bookedDates = [
  new Date(2024, 10, 15),
  new Date(2024, 10, 20),
  new Date(2024, 10, 25),
]

export default function OneOnOneTraining() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [sessionsLeft, setSessionsLeft] = useState(3)

  const isDateBooked = (date: Date) => {
    return bookedDates.some(bookedDate => 
      bookedDate.getDate() === date.getDate() &&
      bookedDate.getMonth() === date.getMonth() &&
      bookedDate.getFullYear() === date.getFullYear()
    )
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date && !isDateBooked(date)) {
      setSelectedDate(date)
      setSessionsLeft(prev => prev - 1)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Book 1:1 Training Session</h2>
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => 
                date < new Date() || 
                isDateBooked(date) || 
                date > addDays(new Date(), 30)
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Sessions left this month: {sessionsLeft}
        </p>
      </div>
      {selectedDate && (
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded-md">
          <p className="text-green-800 dark:text-green-200">
            Session booked for {format(selectedDate, "PPPP")}
          </p>
        </div>
      )}
    </div>
  )
}