import { GET_MESSAGES } from "../constants/actionTypes";
import * as api from "../../utils/api/APIService"

export const getMessages = (userId, chatId) => async (dispatch) => {
  try {
    await api.getMessages(userId, chatId).then((res) => {
      console.log("MESSAGES: ", res.data)
      dispatch({ type: GET_MESSAGES, payload: res.data })
    })
  } catch (error) {
    console.log(error.message);
  }
}

export const postMessage = (newMessageData) => async (dispatch) => {
  try {
    await api.postMessage(newMessageData).then((res) => {
      console.log(res.data)
    })
  } catch (error) {
    console.log(error.message);
  }
}