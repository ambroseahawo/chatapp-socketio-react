import { GET_MESSAGES, POST_MESSAGE } from "../constants/actionTypes";

export const getMessagesReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, messages: action.payload }

    default:
      return state
  }
}

export const postMessageReducer = (state = { message: null }, action) => {
  switch (action.type) {
    case POST_MESSAGE:
      return { ...state, message: action.payload }

    default:
      return state
  }
}