import * as api from "../../utils/api/APIService"
import { GET_CHATS, GET_CURRENT_CHAT, SET_CURRENT_CHAT } from "../constants/actionTypes"

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

export const getCurrentChat = (userId) => async (dispatch) => {
  try {
    await api.getCurrentChat(userId).then((res) => {
      console.log("CURRENT CHAT: ", res.data);
      dispatch({ type: GET_CURRENT_CHAT, payload: res.data })
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const switchCurrentChat = (chat) => async (dispatch) => {
  try {
    console.log("CURRENT CHAT", chat)
    dispatch({ type: SET_CURRENT_CHAT, payload: chat })
  } catch (error) {
    console.log(error.message);
  }
}