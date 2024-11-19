// import DashboardLayout from "./layout";
'use client'

import Profile from "@/components/dashboard/Profile";
import OnboardingWizard from "@/components/onboarding/page";
import { useState } from "react";

export default function DashboardHome() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  function handleOnboardingComplete() {
    setOnboardingCompleted(true);
  }

  if(true) {
    handleOnboardingComplete()
  } 
  return (
    <div>
      {onboardingCompleted ?
      <Profile />
      : <OnboardingWizard />}
    </div>
  )
}
