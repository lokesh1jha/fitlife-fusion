"use client"
import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { FlipWordsTitle } from '@/components/landing/FlipWordsTitle'

export default function LandingPage() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  console.log(scrollY)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className=" flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <FlipWordsTitle />
                {/* <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-400">
                  Join FitLife Fusion for personalized workouts, expert guidance, and a supportive community. Start your journey to a healthier you today.
                </p> */}
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-green-400 text-black-600 hover:bg-green-600">Start Free Trial</Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20">Create Account</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Unleash Your Potential</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { title: "Personalized Workouts", content: "AI-driven workout plans tailored to your goals, fitness level, and preferences.", icon: "🏋️‍♀️" },
                { title: "Expert Guidance", content: "Access to certified trainers for 1:1 sessions and personalized advice.", icon: "👨‍🏫" },
                { title: "Nutrition Plans", content: "Custom meal plans and recipes to support your fitness journey.", icon: "🥗" },
                { title: "Progress Tracking", content: "Advanced analytics and insights to monitor your improvements over time.", icon: "📊" },
                { title: "Community Support", content: "Connect with like-minded individuals and participate in challenges.", icon: "🤝" },
                { title: "On-Demand Videos", content: "Access a vast library of workout videos for any time, anywhere fitness.", icon: "🎥" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-white transition-colors duration-300 relative z-10">
                        {feature.icon} {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="group-hover:text-white transition-colors duration-300 relative z-10">{feature.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Path</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { title: "Basic", price: "$9.99/mo", features: ["Personalized workout plans", "Basic nutrition guidance", "Progress tracking"], description: "For casual fitness enthusiasts" },
                { title: "Pro", price: "$19.99/mo", features: ["All Basic features", "1:1 trainer sessions", "Advanced nutrition plans", "Exclusive workout videos"], description: "For dedicated fitness lovers", highlight: true },
                { title: "Elite", price: "$29.99/mo", features: ["All Pro features", "Priority 1:1 coaching", "Customized meal prep", "Performance analytics"], description: "For performance athletes" },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`relative overflow-hidden ${plan.highlight ? 'border-purple-500 dark:border-purple-400' : ''}`}>
                    {plan.highlight && (
                      <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.title}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">{plan.price}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-500" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.highlight ? 'bg-purple-500 hover:bg-purple-600' : ''}`}>Choose Plan</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-500 dark:text-gray-400">All plans come with a 7-day free trial. No credit card required.</p>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Transformations That Inspire</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Sarah M.", achievement: "Lost 30 lbs in 6 months", content: "FitLife Fusion changed my life. The personalized workouts and nutrition plans made all the difference. I've never felt better!" },
                { name: "John D.", achievement: "Marathon runner", content: "As a busy professional, FitLife Fusion's flexibility is perfect. I can work out anytime, anywhere, and still get expert guidance." },
                { name: "Emily R.", achievement: "New mom", content: "The post-pregnancy program was exactly what I needed. It helped me regain my strength and confidence." },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border-none">
                    <CardHeader>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-200">{testimonial.achievement}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">&quot;{testimonial.content}&quot;</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                { question: "How does the free trial work?", answer: "Our 7-day free trial gives you full access to all features of your chosen plan. You can cancel anytime during the trial period without being charged." },
                { question: "Do I need any special equipment?", answer: "While some workouts may require basic equipment like dumbbells or resistance bands, many of our routines can be done with just your body weight. We offer modifications for all fitness levels and equipment availability." },
                { question: "Can I switch plans?", answer: "Yes, you can upgrade or downgrade your plan at any time. The change will be reflected in your next billing cycle." },
                { question: "How often are new workouts added?", answer: "We add new workouts and programs weekly to keep your routine fresh and challenging. Our team of fitness experts is always creating new content based on the latest research and member feedback." },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Life?</h2>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Join FitLife Fusion today and start your journey to a healthier, stronger you. Remember, your 7-day free trial awaits!
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-green-400 text-black-600 hover:bg-green-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}