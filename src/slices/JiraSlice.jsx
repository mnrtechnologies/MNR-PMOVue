import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jiraProjectData } from '../data/jiraProjectData';

// This is an async thunk for fetching data. It mimics an API call.
export const fetchProjectBySlug = createAsyncThunk(
    'jira/fetchProjectBySlug',
    async (projectSlug, { rejectWithValue }) => {
        // Simulating a network request
        await new Promise(resolve => setTimeout(resolve, 500)); 
        const data = jiraProjectData[projectSlug];
        if (data) {
            return data;
        } else {
            // If the project is not found, we reject the promise
            return rejectWithValue('Project not found');
        }
    }
);

const initialState = {
    project: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

const jiraSlice = createSlice({
    name: 'jira',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectBySlug.pending, (state) => {
                state.status = 'loading';
                state.project = null;
                state.error = null;
            })
            .addCase(fetchProjectBySlug.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.project = action.payload;
            })
            .addCase(fetchProjectBySlug.rejected, (state, action) => {
                state.status = 'failed';
                // The error message from rejectWithValue is in action.payload
                state.error = action.payload; 
            });
    },
});

// Selectors to get data from the store in components
export const selectJiraProject = (state) => state.jira.project;
export const selectJiraStatus = (state) => state.jira.status;
export const selectJiraError = (state) => state.jira.error; // <-- This line is now correctly added

export default jiraSlice.reducer;