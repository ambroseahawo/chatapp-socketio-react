import { GET_CHATS } from "../constants/actionTypes";

export const getChatsReducer = (state = { chats: [] }, action) => {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload }

    default:
      break;
  }
}