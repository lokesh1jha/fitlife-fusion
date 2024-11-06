export const Routes = {
  "HOME": "/",
  "EVENTS": "/events",
  "LOGIN": "/login",
  "SIGNUP": "/signup",
  "DASHBOARD": "/dashboard",
  "ONBOARDING": "/onboarding",
  "REPORT_ISSUE": "/report-issue",
  "EVENT_DETAILS": "/events/:eventId",
  "WORKOUTS": "/workouts",
  "WORKOUT_DETAILS": "/workouts/:workoutId",
  "EXERCISES": "/exercises",
  "EXERCISE_DETAILS": "/exercises/:exerciseId",
  "WORKOUT_LOGS": "/workout-logs",
  "WORKOUT_LOG_DETAILS": "/workout-logs/:workoutLogId"
}


export const publicRoutes = [
  Routes.HOME,
  Routes.EVENTS,
  Routes.LOGIN,
  Routes.SIGNUP,
  Routes.EVENT_DETAILS,
  Routes.REPORT_ISSUE,
]

export const authRoutes = [
  Routes.LOGIN,
  Routes.SIGNUP,
  Routes.DASHBOARD,
  Routes.ONBOARDING,
  Routes.WORKOUTS,
  Routes.WORKOUT_DETAILS,
  Routes.EXERCISES,
  Routes.EXERCISE_DETAILS,
  Routes.WORKOUT_LOGS,
  Routes.WORKOUT_LOG_DETAILS
]

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = Routes.DASHBOARD