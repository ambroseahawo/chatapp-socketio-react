import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getCurrentChatFriend } from '../../global/actions/chats'
import Avatar from "../avatar/Avatar"
import noProfilePicture from "../../assets/images/noAvatar.png"

const ChatHeader = () => {
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const dispatch = useDispatch()
  const currentChat = useSelector((state) => state.getChatsReducer.currentChat)

  const [chatUser, setChatUser] = useState({})

  useEffect(() => {
    dispatch(getCurrentChatFriend(currentAuthenticatedUser._id, setChatUser))
  }, [currentAuthenticatedUser._id, dispatch])

  useEffect(() => {
    const getUser = async () => {
      const friendId = currentChat?.members.find((id) => id !== currentAuthenticatedUser._id)
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?userId=${friendId}`)
        setChatUser(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    if(currentChat)getUser()
  }, [currentAuthenticatedUser._id, currentChat, currentChat?.members])

  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar isOnline="active"
            image={chatUser?.profilePicture ?
              chatUser?.profilePicture :
              noProfilePicture}
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