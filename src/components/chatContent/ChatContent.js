import React from 'react'
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import SendMessages from "./SendMessages"
import "./chatContent.css";

const ChatContent = () => {
  return (
    <div className="main__chatcontent">
      <ChatHeader />
      <ChatMessages />
      <SendMessages />
    </div>
  )
}

export default ChatContent