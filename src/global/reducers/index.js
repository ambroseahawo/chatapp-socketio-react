import { combineReducers } from "redux"
import { authReducer } from "./auth"
import { getChatsReducer } from "./chats"
import { getUserReducer } from "./users"

export default combineReducers({
  authReducer, getChatsReducer, getUserReducer
})