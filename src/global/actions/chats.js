import * as api from "../../utils/api/APIService"
import { GET_CHATS } from "../constants/actionTypes"

export const getExistingChats = (userId) => async (dispatch) => {
  console.log("HERERERERE");
  try {
    await api.getExistingChats(userId).then((resp) =>{
      console.log("ALL CHATS RESP: ", resp);
    })
  } catch (error) {
    console.log(error.message)
  }
}