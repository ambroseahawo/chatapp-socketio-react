import { GET_MESSAGES } from "../constants/actionTypes";
import * as api from "../../utils/api/APIService"

export const getMessages = (userId, chatId) => async(dispatch) =>{
  try {
    await api.getMessages(userId, chatId).then((res) =>{
      console.log("MESSAGES: ", res.data)
    })
  } catch (error) {
    console.log(error.message);
  }
}