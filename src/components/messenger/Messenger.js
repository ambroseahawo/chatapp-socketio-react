import React from 'react'
import ChatsList from "../chats/ChatsList"
import ChatContent from "../chatContent/ChatContent"
import Profile from "../profile/Profile"
import "./messenger.css"

const Messenger = () => {
  return (
    <div className="main__chatbody">
      <ChatsList />
      <ChatContent />
      <Profile />
    </div>
  )
}

export default Messenger