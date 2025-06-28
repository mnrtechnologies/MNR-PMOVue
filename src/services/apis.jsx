const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
//   SIGNUP_API: BASE_URL + "/auth/register",
  SIGNIN_API: BASE_URL + "/auth/signin",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}