import { REGISTER_USER } from "../constants/actionTypes";

export const authReducer = (state = { authData: null, errorResponse: null }, action) =>{
  switch(action.type){
    case REGISTER_USER:
      return { ...state, authData: action.payload, errorResponse: action.errorResponse }
    
    default:
      return state
  }
}