import { useState } from 'react'
import { Download, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

const dietPlan = [
  { meal: "Breakfast", food: "Oatmeal with berries and nuts" },
  { meal: "Lunch", food: "Grilled chicken salad with mixed vegetables" },
  { meal: "Dinner", food: "Baked salmon with quinoa and steamed broccoli" },
  { meal: "Snack", food: "Greek yogurt with honey and almonds" },
]

export default function Diet() {
  const [comment, setComment] = useState("")

  const handleDownload = () => {
    const dietText = dietPlan.map(item => `${item.meal}: ${item.food}`).join('\n')
    const blob = new Blob([dietText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'diet-plan.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Diet Plan</h2>
      {dietPlan.map((item, index) => (
        <Card key={index} className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-medium">{item.meal}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">{item.food}</p>
          </CardContent>
        </Card>
      ))}
      <div className="flex space-x-4">
        <Button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-600 text-white">
          <Download className="mr-2 h-4 w-4" /> Download Plan
        </Button>
        <Button onClick={() => window.print()} className="bg-green-500 hover:bg-green-600 text-white">
          Print Plan
        </Button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Leave a Comment</h3>
        <Textarea
          placeholder="Any questions or requests for changes?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-2"
        />
        <Button className="bg-purple-500 hover:bg-purple-600 text-white">
          <MessageSquare className="mr-2 h-4 w-4" /> Submit Comment
        </Button>
      </div>
    </div>
  )
}