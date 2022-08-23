import * as api from "../../utils/api/APIService"
import { REGISTER_USER } from "../constants/actionTypes"

export const registerNewUser = (userData) => async (dispatch) => {
  try {
    await api.registerNewUser(userData).catch((error) => {
      console.log(error.response.data)
      dispatch({ type: REGISTER_USER, errors: error.response.data })
    })
  } catch (error) {
    console.log(error.message);
  }
}