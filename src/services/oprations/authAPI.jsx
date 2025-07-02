import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const {
  SENDOTP_API,
  SIGNIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
  GET_USER_DETAILS_API,
  SIGNUP_API,
  GET_ALL_USERS_API,
  EDIT_USER_API,
  DELETE_USER_API,
} = endpoints;

//get all users
export function getAllUsers() {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector("GET", GET_ALL_USERS_API, null, {
        Authorization: `Bearer ${token}`,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      return response.data.users;
    } catch (error) {
      console.error("GET_ALL_USERS ERROR:", error);
      return [];
    }
  };
}


//edit user
export function editUser(userId, updatedData, onSuccess) {
  return async (dispatch) => {
    const toastId = toast.loading("Updating user...");
    //dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector("PUT", EDIT_USER_API(userId), updatedData, {
        Authorization: `Bearer ${token}`,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("User updated successfully");
      onSuccess && onSuccess(response.data.user); // Optional callback
    } catch (error) {
      console.error("EDIT_USER ERROR:", error);
      toast.error(error?.response?.data?.message || "Failed to update user");
    }
    toast.dismiss(toastId);
   // dispatch(setLoading(false));
  };
}

//delete user
export function deleteUser(userId, onSuccess) {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting user...");
    //dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector("DELETE", DELETE_USER_API(userId), null, {
        Authorization: `Bearer ${token}`,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("User deleted successfully");
      onSuccess && onSuccess(); // Optional callback to refresh UI
    } catch (error) {
      console.error("DELETE_USER ERROR:", error);
      toast.error(error?.response?.data?.message || "Failed to delete user");
    }
    toast.dismiss(toastId);
   // dispatch(setLoading(false));
  };
}

//register
export function signUp(role, name, email, password, confirmPassword, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
        
      }
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await apiConnector(
        "POST",
        SIGNUP_API,
        {
          role,
          name,
          email,
          password,
          confirmPassword,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/dashboard/settings/user-management");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error(error?.response?.data?.message || error?.message || "Signup Failed");
    }
    //spatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function getUserDetails() {
  return async (dispatch) => {
    //const toastId = toast.loading("Fetching user...");
    dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      });

      //console.log("GET_USER_DETAILS RESPONSE:", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      const userData = response.data.user;
      dispatch(setUser(userData));
      // toast.success("User loaded successfully");
    } catch (error) {
      console.log("GET_USER_DETAILS ERROR:", error);
      //toast.error("Failed to fetch user details");
    }
    //toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESETPASSTOKEN RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error);
      toast.error("Failed To Send Reset Email");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      console.log("RESETPASSWORD RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password Reset Successfully");
      navigate("/");
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error);
      toast.error("Failed To Reset Password");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function sendOtp(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log("api", SENDOTP_API);
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        password,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signin(email, password, otp, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNIN_API, {
        email,
        password,
        otp,
      });

      console.log("SIGNin API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signin Successful");

      dispatch(setToken(response.data.token));

      dispatch(setUser({ ...response.data.user }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/dashboard");
    } catch (error) {
      console.log("SIGNin API ERROR............", error);
      toast.error("Signin Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}
