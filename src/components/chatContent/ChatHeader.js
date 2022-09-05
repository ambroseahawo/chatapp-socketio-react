import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import Avatar from "../avatar/Avatar"
import { getCurrentChat } from '../../global/actions/chats'

const ChatHeader = () => {
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const dispatch = useDispatch()
  const currentChat = useSelector((state) => state.getChatsReducer.currentChat)

  const [chatUser, setChatUser] = useState({})

  useEffect(() => {
    dispatch(getCurrentChat(currentAuthenticatedUser._id, setChatUser))
  }, [currentAuthenticatedUser._id, dispatch])

  useEffect(() => {
    const friendId = currentChat?.members.find((id) => id !== currentAuthenticatedUser._id)

    const getUser = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?userId=${friendId}`)
        setChatUser(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getUser()
  }, [currentAuthenticatedUser._id, currentChat?.members])

  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar isOnline="active"
            image={chatUser?.profilePicture}
          />
          <p>{chatUser?.username}</p>
        </div>
      </div>

      <div className="blocks">
        <div className="settings">
          <button className="btn-nobg">
            <i className="fa fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader