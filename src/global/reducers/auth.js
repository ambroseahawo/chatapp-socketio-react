import { REGISTER_USER } from "../constants/actionTypes";

export const authReducer = (state={ authData: null, errors: null }, action) =>{
  switch(action.type){
    case REGISTER_USER:
      return { ...state, authData: action.payload, errors: action.errors}
    
    default:
      return state
  }
}