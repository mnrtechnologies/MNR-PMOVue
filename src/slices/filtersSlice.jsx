import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for your filters
const initialState = {
    program: '',
    projectManager: '',
    vendor: '',
    impactedDashboard: '',
    riskSeverity: '',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    // Reducers define how the state can be updated
    reducers: {
        // A generic action to update any filter
        setFilter: (state, action) => {
            const { filterName, value } = action.payload;
            // Ensures that only valid filter keys can be set
            if (Object.prototype.hasOwnProperty.call(state, filterName)) {
                state[filterName] = value;
            }
        },
        // Action to clear all filters
        clearFilters: (state) => {
            Object.assign(state, initialState);
        },
    },
});

// Export the actions so you can use them in your components
export const { setFilter, clearFilters } = filtersSlice.actions;

// Export the reducer to be added to the store
export default filtersSlice.reducer;