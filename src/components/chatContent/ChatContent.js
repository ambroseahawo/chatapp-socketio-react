import React from 'react'
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import SendMessages from "./SendMessages"

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