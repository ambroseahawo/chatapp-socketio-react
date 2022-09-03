import * as api from "../../utils/api/APIService"
// import { GET_USER } from "../constants/actionTypes"

export const getExistingUser = (userId, setChatUsers) => async (dispatch) => {
  try {
    await api.getExistingUser(userId).then((resp) =>{
      console.log(resp.data)
    })
  } catch (error) {
    console.log(error.message);
  }
}