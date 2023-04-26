/** @format */

import { combineReducers } from "@reduxjs/toolkit"

import { service } from "@/redux/service"

export const reducer = combineReducers({
	[service.reducerPath]: service.reducer,
})
