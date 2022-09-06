import * as api from "../../utils/api/APIService"
import { GET_CHATS, SET_CURRENT_CHAT } from "../constants/actionTypes"

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

export const getCurrentChatFriend = (userId, setChatUser) => async (dispatch) => {
  try {
    await api.getCurrentChat(userId).then((res) => {
      console.log("CURRENT CHAT: ", res.data);
      setChatUser(res.data)
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

export const putCurrentChat = ({ userId, chatId }) => async () => {
  try {
    await api.putCurrentChat({ userId, chatId })
  } catch (error) {
    console.log(error.message);
  }
}