import React from 'react'
import MessageItem from "./MessageItem"

const ChatMessages = () => {
  const messages = [{ sender: "me", user: "name", text: "default", image: "http://placehold.it/80x80"}]

  return (
    <div className="content__body">
      <div className="chat__items">
        {messages && messages.map((itm, index) => {
          return (
            <MessageItem
              key={index}
              sender={itm.sender}
              user={itm.sender}
              text={itm.text}
              image={itm.image}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ChatMessages