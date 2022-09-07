import { combineReducers } from "redux"
import { authReducer } from "./auth"
import { getChatsReducer } from "./chats"
import { getUserReducer } from "./users"
import { getMessagesReducer, postMessageReducer } from "./messages"

export default combineReducers({
  authReducer, 
  getChatsReducer, 
  getUserReducer, 
  getMessagesReducer,
  postMessageReducer
})