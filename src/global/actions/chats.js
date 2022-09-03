import * as api from "../../utils/api/APIService"
import { GET_CHATS } from "../constants/actionTypes"

export const getExistingChats = (userId) => async (dispatch) => {
  try {
    await api.getExistingChats(userId).then((resp) => {
      console.log("ALL CHATS: ", resp.data)
      dispatch({ type: GET_CHATS, payload: resp.data })
    })
  } catch (error) {
    console.log(error.message)
  }
}