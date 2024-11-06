
import { Metadata } from "next"

export function absoluteUrl(path: string) {
    if (typeof window !== 'undefined') return path
    if (process.env.VERCEL_URL)
      return `https://${process.env.VERCEL_URL}${path}`
    return `http://localhost:${process.env.PORT ?? 3000
      }${path}`
  }
  
  export function constructMetadata({
    title = "FitPro",
    description = "Your personal fitness companion",
    // image = "/thumbnail.png",
    icons = "/favicon.ico",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        // images: [
        //   {
        //     url: image
        //   }
        // ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        // images: [image],
        creator: "@lokesh1jha"
      },
      icons,
      metadataBase: new URL('https://fitpro.in/'),
      // themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }
  
  export const getStringFromBuffer = (buffer: ArrayBuffer) =>
    Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  
  
  export enum ResultCode {
    InvalidCredentials = 'INVALID_CREDENTIALS',
    InvalidSubmission = 'INVALID_SUBMISSION',
    UserAlreadyExists = 'USER_ALREADY_EXISTS',
    UnknownError = 'UNKNOWN_ERROR',
    UserCreated = 'USER_CREATED',
    UserLoggedIn = 'USER_LOGGED_IN'
  }
  
  export const getMessageFromCode = (resultCode: string) => {
    switch (resultCode) {
      case ResultCode.InvalidCredentials:
        return 'Invalid credentials!'
      case ResultCode.InvalidSubmission:
        return 'Invalid submission, please try again!'
      case ResultCode.UserAlreadyExists:
        return 'Account already exists, please log in!'
      case ResultCode.UserCreated:
        return 'Account created, welcome!'
      case ResultCode.UnknownError:
        return 'Something went wrong, please try again!'
      case ResultCode.UserLoggedIn:
        return 'Logged in!'
    }
  }
  