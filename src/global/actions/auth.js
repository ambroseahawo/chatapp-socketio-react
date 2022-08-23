import * as api from "../../utils/api/APIService"
import { REGISTER_USER } from "../constants/actionTypes"

export const registerNewUser = (userData) => async (dispatch) => {
  try {
    await api.registerNewUser(userData).catch((error) => {
      console.log(error.response)
      dispatch({ type: REGISTER_USER, errorResponse: error.response })
    })
  } catch (error) {
    console.log(error.message);
  }
}