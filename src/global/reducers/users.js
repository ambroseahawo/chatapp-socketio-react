import { GET_USER } from "../constants/actionTypes";

export const getUserReducer = (state = { userData: null }, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userData: action.payload }

    default:
      return state
  }
}