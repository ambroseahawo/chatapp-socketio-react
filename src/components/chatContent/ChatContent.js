import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCurrentChatFriend } from '../../global/actions/chats'
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import SendMessages from "./SendMessages"
import "./chatContent.css";

const ChatContent = () => {
  const dispatch = useDispatch()
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const scrollRef = useRef()

  const [chatUser, setChatUser] = useState({})

  useEffect(() => {
    dispatch(getCurrentChatFriend(currentAuthenticatedUser._id, setChatUser))
  }, [currentAuthenticatedUser._id, dispatch])

  return (
    <div className="main__chatcontent">
      <ChatHeader chatUser={chatUser} setChatUser={setChatUser} />
      <ChatMessages chatUser={chatUser} scrollRef={scrollRef} />
      <SendMessages scrollRef={scrollRef} />
    </div>
  )
}

export default ChatContent