import * as api from "../../utils/api/APIService"
import { LOGIN_USER, REGISTER_USER } from "../constants/actionTypes"

export const registerNewUser = (userData, setIsSignup, setPassword) => async (dispatch) => {
  try {
    await api.registerNewUser(userData).then(() =>{
      setIsSignup(false)
      setPassword("")
    }).catch((error) => {
      console.log(error.response)
      dispatch({ type: REGISTER_USER, errorResponse: error.response })
    })
  } catch (error) {
    console.log(error.message);
  }
}

export const loginExistingUser = (userData) => async(dispatch) =>{
  try{
    await api.loginExistingUser(userData).then((resp) =>{
      dispatch({ type: LOGIN_USER, payload: resp.data, errorResponse: null})
    }).catch((error) => {
      console.log(error);
      dispatch({ type: LOGIN_USER, errorResponse: error.response })
    })
  }catch(error){
    console.log(error.message)
  }
}