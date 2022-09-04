import * as api from "../../utils/api/APIService"
import { GET_USER } from "../constants/actionTypes"

export const getExistingUser = (userId) => async (dispatch) => {
  try {
    await api.getExistingUser(userId).then((resp) =>{
      dispatch({type: GET_USER, payload: resp.data})
    })
  } catch (error) {
    console.log(error.message);
  }
}