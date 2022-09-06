import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MessageItem from "./MessageItem"

const ChatMessages = () => {
  const currentChatState = useSelector((state) => state.getChatsReducer.currentChatFriend)
  const [currentChatId, setCurrentChatId] = useState(currentChatState?.currentChatId)
  const [messages, setMessages] = useState([])

  return (
    <div className="content__body">
      <div className="chat__items">
        {messages && messages.map((itm, index) => {
          return (
            <React.Fragment key={index}>
              <MessageItem
                sender={itm.sender}
                user={itm.sender}
                text={itm.text}
                image={itm.image}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

export default ChatMessages