import { GET_MESSAGES } from "../constants/actionTypes";

export const getMessagesReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, messages: action.payload }

    default:
      return state
  }
}