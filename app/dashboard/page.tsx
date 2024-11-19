// import DashboardLayout from "./layout";
'use client'

import Profile from "@/components/dashboard/Profile";
import OnboardingWizard from "@/components/onboarding/page";
import { useState } from "react";

export default function DashboardHome() {
  let [onboardingCompleted, setOnboardingCompleted] = useState(false);

  return (
    <div>
      {onboardingCompleted ?
      <Profile />
      : <OnboardingWizard />}
    </div>
  )
}
