import React from 'react'
import MessageItem from "./MessageItem"

const ChatMessages = () => {
  const messages = [{ sender: "me", user: "name", text: "default", image: "http://placehold.it/80x80"}]

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