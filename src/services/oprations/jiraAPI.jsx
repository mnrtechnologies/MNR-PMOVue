import { toast } from "react-hot-toast";
import { setLoading } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { jiraendpoints } from "../apis";

const { GET_ISSUES_API } = jiraendpoints;

// 🔁 Rename to better reflect what it does
export function getAllJiraIssues() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", GET_ISSUES_API);

      console.log("GET_ISSUES_API RESPONSE:", response);

      // Validate the response is an array
      if (!Array.isArray(response.data)) {
        throw new Error("Invalid response format");
      }

      // Optional: dispatch to Redux store if needed
      // dispatch(setIssues(response.data));

      toast.success("Issues loaded successfully");
      return response.data; // Optional return for direct use
    } catch (error) {
      console.error("GET_ISSUES_API ERROR:", error);
      toast.error("Failed to fetch Jira issues");
    } finally {
      dispatch(setLoading(false));
    }
  };
}

