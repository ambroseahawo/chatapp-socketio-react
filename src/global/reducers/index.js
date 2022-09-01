import { combineReducers } from "redux"
import { authReducer } from "./auth"
import { getChatsReducer } from "./chats"

export default combineReducers({
  authReducer, getChatsReducer
})