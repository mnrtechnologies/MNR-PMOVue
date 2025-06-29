import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import filtersReducer from '../slices/filtersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  filters:filtersReducer,

})

export default rootReducer
