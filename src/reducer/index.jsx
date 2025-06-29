import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import filtersReducer from '../slices/filtersSlice';
import jiraReducer from '../slices/JiraSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  filters:filtersReducer,
  jira: jiraReducer,
})

export default rootReducer
