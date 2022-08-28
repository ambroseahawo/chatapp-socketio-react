import React from 'react'
import ChatList from "../chats/ChatList"
import ChatContent from "../chatContent/ChatContent"
import Profile from "../profile/Profile"
import "./messenger.css"

const Messenger = () => {
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
      <Profile />
    </div>
  )
}

export default Messenger