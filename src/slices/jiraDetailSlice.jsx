import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credentials: null, // stores jiraEmail, jiraSite, jiraApiKey
  loading: false,
  error: null,
};

const jiraDetailSlice = createSlice({
  name: "jira",
  initialState,
  reducers: {
    setJiraCredentials(state, action) {
      state.credentials = action.payload;
    },
    setJiraLoading(state, action) {
      state.loading = action.payload;
    },
    setJiraError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setJiraCredentials, setJiraLoading, setJiraError } = jiraDetailSlice.actions;

export default jiraDetailSlice.reducer;
