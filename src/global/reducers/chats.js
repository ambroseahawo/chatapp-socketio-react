import { GET_CHATS, GET_CURRENT_CHAT_FRIEND, SET_CURRENT_CHAT } from "../constants/actionTypes";

export const getChatsReducer = (state = { chats: null, currentChatFriend: null, currentChat: null }, action) => {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload }
    case GET_CURRENT_CHAT_FRIEND:
      return { ...state, currentChatFriend: action.payload }
    case SET_CURRENT_CHAT:
      return { ...state, currentChat: action.payload }

    default:
      return state
  }
}