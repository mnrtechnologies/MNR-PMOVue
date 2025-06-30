import { toast } from "react-hot-toast";

import { setLoading } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { chatbotendpoints } from "../apis";

const { CHATBOT_API } = chatbotendpoints;

export function chatbot(query) {
  return async (dispatch) => {

    try {
      const response = await apiConnector("POST", CHATBOT_API, { query });

      console.log("CHATBOT RESPONSE:", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      return response.data.response; 
    } catch (error) {
      console.log("CHATBOT ERROR:", error);
      toast.error("Failed to get chatbot response");
      return "Sorry, something went wrong.";
    } finally {
    
      dispatch(setLoading(false));
    }
  };
}

