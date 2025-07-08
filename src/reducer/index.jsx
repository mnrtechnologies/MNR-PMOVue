import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import filtersReducer from '../slices/filtersSlice';
import jiraReducer from '../slices/JiraSlice';
import jiraDetailReducer from '../slices/jiraDetailSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  filters:filtersReducer,
  jira: jiraReducer,
  jiradetail: jiraDetailReducer
})

export default rootReducer
