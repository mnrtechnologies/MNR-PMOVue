const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {

  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/register",
  SIGNIN_API: BASE_URL + "/auth/signin",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/change-password",

  UPDATE_IMAGE_API: BASE_URL + "/auth/update-image",
  UPDATE_INFO_API: BASE_URL + "/auth/update-info",

  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",

  GET_USER_DETAILS_API: BASE_URL + "/auth/get-user-details",
  GET_ALL_USERS_API: BASE_URL + "/auth/get-all-user-details", 
  EDIT_USER_API: (userId) => `${BASE_URL}/auth/edit-user/${userId}`, 
  DELETE_USER_API: (userId) => `${BASE_URL}/auth/delete-user/${userId}`,
};

export const jiraendpoints = {

  GET_ISSUES_API: BASE_URL + "/jira",
 // GET_ISSUES_API: BASE_URL + "/jira/connect",

}

export const chatbotendpoints = {
  CHATBOT_API: BASE_URL + "/chatbot",
};
