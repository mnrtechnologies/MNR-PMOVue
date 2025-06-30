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
  GET_USER_DETAILS_API
} = endpoints;

export function getUserDetails() {
  return async (dispatch) => {
    //const toastId = toast.loading("Fetching user...");
    dispatch(setLoading(true));
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const response = await apiConnector(
        "GET",
        GET_USER_DETAILS_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      console.log("GET_USER_DETAILS RESPONSE:", response);

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
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      })

      console.log("RESETPASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/")
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function sendOtp(email,password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
        console.log("api",SENDOTP_API)
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

