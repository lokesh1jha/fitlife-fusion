'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"

type FormData = {
    fullName: string
    age: number
    gender: string
    height: number
    heightUnit: string
    weight: number
    weightUnit: string
    fitnessGoals: string[]
    activityLevel: string
    dietaryPreferences: string[]
    medicalConditions: string[]
    termsAccepted: boolean
}

const steps = [
    'Personal Information',
    'Fitness Profile',
    'Health Information',
    'Consent'
]

export default function OnboardingWizard() {
    const [currentStep, setCurrentStep] = useState(0)
    const { register, handleSubmit, watch, setValue, formState: {  } } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="fullName" className="font-bold">Full Name</Label>
                                <Input id="fullName" {...register('fullName', { required: true })} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="age" className="font-bold">Age</Label>
                                <Input id="age" type="number" {...register('age', { required: true, min: 18 })} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="gender" className="font-bold">Gender</Label>
                                <Select onValueChange={(value) => setValue('gender', value)}>
                                    <SelectTrigger id="gender">
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                )
            case 1:
                return (
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="height" className="font-bold">Height</Label>
                                <div className="flex space-x-2">
                                    <Input
                                        id="height"
                                        type="number"
                                        {...register('height', { required: true, min: 0 })}
                                    />
                                    <Select onValueChange={(value) => setValue('heightUnit', value)}>
                                        <SelectTrigger id="heightUnit" className="text-black bg-white w-24">
                                            <SelectValue placeholder="Unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="cm">cm</SelectItem>
                                            <SelectItem value="in">in</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="weight" className="font-bold">Weight</Label>
                                <div className="flex space-x-2">
                                    <Input
                                        id="weight"
                                        type="number"
                                        {...register('weight', { required: true, min: 0 })}
                                    />
                                    <Select onValueChange={(value) => setValue('weightUnit', value)}>
                                        <SelectTrigger id="weightUnit" className="text-black bg-white w-24">
                                            <SelectValue placeholder="Unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kg">kg</SelectItem>
                                            <SelectItem value="lbs">lbs</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className="font-bold">Fitness Goals (Select all that apply)</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Weight loss', 'Muscle gain', 'Endurance', 'Flexibility'].map((goal) => (
                                        <div key={goal} className="flex items-center space-x-2">
                                            <Checkbox id={goal} {...register('fitnessGoals')} value={goal} className="border-white" />
                                            <Label htmlFor={goal}>{goal}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="activityLevel" className="font-bold">Activity Level</Label>
                                <Select onValueChange={(value) => setValue('activityLevel', value)}>
                                    <SelectTrigger id="activityLevel">
                                        <SelectValue placeholder="Select activity level" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="sedentary">Sedentary</SelectItem>
                                        <SelectItem value="lightly-active">Lightly Active</SelectItem>
                                        <SelectItem value="moderately-active">Moderately Active</SelectItem>
                                        <SelectItem value="very-active">Very Active</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                )
            case 2:
                return (
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label className="font-bold">Dietary Preferences (Select all that apply)</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'No restrictions'].map((diet) => (
                                        <div key={diet} className="flex items-center space-x-2">
                                            <Checkbox id={diet} {...register('dietaryPreferences')} value={diet} className="border-white" />
                                            <Label htmlFor={diet}>{diet}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className="font-bold">Medical Conditions (Select all that apply)</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Diabetes', 'Hypertension', 'Heart disease', 'Asthma', 'None'].map((condition) => (
                                        <div key={condition} className="flex items-center space-x-2">
                                            <Checkbox id={condition} {...register('medicalConditions')} value={condition} className="border-white" />
                                            <Label htmlFor={condition}>{condition}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                )
            case 3:
                return (
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center space-x-2"
                                onChange={(e) => {
                                    // setValue('termsAccepted', e.target.checked)
                                    //@ts-expect-error checked
                                    if(e.target.checked)
                                        setValue('termsAccepted', true)
                                    else
                                        setValue('termsAccepted', false)
                                }}>
                                    <Switch id="termsAccepted" {...register('termsAccepted', { required: true })} className="data-[state=checked]:bg-green-500" 
                                     />
                                    <Label htmlFor="termsAccepted" className="font-bold">I accept all terms and conditions</Label>
                                </div>
                                <p className="text-sm text-gray-300">
                                    This app will guide you with your exercise and diet. We are not responsible for any injury or accident. Payments are non-refundable.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                )
            default:
                return null
        }
    }
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} >
                <Card className="w-full max-w-md bg-gray-900 text-gray-100">
                    <CardHeader>
                        <CardTitle>FitLife Pro Onboarding</CardTitle>
                        <CardDescription className="text-gray-300">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</CardDescription>
                    </CardHeader>
                    {renderStep()}
                    <CardFooter className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0} className="text-black bg-white border-gray-300 hover:bg-gray-100 hover:text-black">
                            Previous
                        </Button>
                        {currentStep === steps.length - 1 ? (
                            <Button
                                type="submit"
                                className={`text-white ${watch('termsAccepted') ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500'}`}
                                disabled={!watch('termsAccepted')}
                            >
                                Submit
                            </Button>
                        ) : (
                            <Button type="button" onClick={nextStep} className="bg-green-500 text-white hover:bg-green-600">
                                Next
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}