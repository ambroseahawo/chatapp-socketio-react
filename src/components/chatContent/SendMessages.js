import React, { useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client"
import { useDispatch, useSelector } from 'react-redux'

const SendMessages = ({ scrollRef }) => {
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const currentChat = useSelector((state) => state.getChatsReducer.currentChat)

  const [messages, setMessages] = useState(useSelector((state) => state.getMessagesReducer.messages))
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState("")
  const [onlineUsers, setOnlineUsers] = useState("")

  const socket = useRef()

  useEffect(() => {
    socket.current = io(`${process.env.REACT_APP_WEB_SOCKET}`)
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prevMessages) => [...prevMessages, arrivalMessage])
  }, [arrivalMessage, currentChat?.members])

  useEffect(() => {
    socket.current.emit("addUser", currentAuthenticatedUser._id)
    socket.current.on("getUsers", users => {
      setOnlineUsers(currentAuthenticatedUser.followings?.filter((f) => users.some((u) => u.userId === f)))
    })
  }, [currentAuthenticatedUser._id, currentAuthenticatedUser.followings])

  const handleClick = () => {
    console.log({ text: newMessage });
    const newMessageObj = {
      sender: currentAuthenticatedUser._id,
      text: newMessage,
      conversationId: currentChat._id
    }

    const receiverId = currentChat.members.find(member => member !== currentAuthenticatedUser._id)

    socket.current.emit("sendMessage", {
      senderId: currentAuthenticatedUser._id,
      receiverId,
      text: newMessage
    })
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, scrollRef])

  return (
    <div className="content__footer">
      <div className="sendNewMessage">
        <button className="addFiles">
          <i className="fa fa-plus"></i>
        </button>
        <input
          type="text"
          placeholder="Type a message here"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="btnSendMsg" id="sendMsgBtn" onClick={handleClick}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

export default SendMessages