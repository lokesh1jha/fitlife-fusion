"use server";

import { signIn } from "@/auth";
import { ResultCode } from "@/lib/metadata";
// import { AuthError } from "next-auth";
import { Routes } from "@/routes";
// import { DEFAULT_LOGIN_REDIRECT, Routes } from "@/routes";

interface Result {
  type: string;
  resultCode: ResultCode;
}

export async function authenticate(
  email: string,
  password: string
): Promise<Result | undefined> {
  try {
    console.log("email", email, "password", password);
    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: Routes.ONBOARDING,
    });

    console.log("result in action", result);

    return {
      type: "success",
      resultCode: ResultCode.UserLoggedIn,
    };
  }
  catch (error) {
    throw error;
  }
}
