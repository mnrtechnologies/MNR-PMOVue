const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/auth/get-user-details",
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/register",
  SIGNIN_API: BASE_URL + "/auth/signin",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",

  GET_ALL_USERS_API: BASE_URL + "/auth/get-all-user-details", 
  EDIT_USER_API: (userId) => `${BASE_URL}/auth/edit-user/${userId}`, 
  DELETE_USER_API: (userId) => `${BASE_URL}/auth/delete-user/${userId}`,
};

export const chatbotendpoints = {
  CHATBOT_API: BASE_URL + "/chatbot",
};
