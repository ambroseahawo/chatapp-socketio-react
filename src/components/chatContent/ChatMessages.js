import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../global/actions/messages'
import MessageItem from "./MessageItem"

const ChatMessages = ({ chatUser }) => {
  const dispatch = useDispatch()
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log("CHAT USER: ", chatUser);
    if (Object.keys(chatUser).length !== 0) dispatch(getMessages(currentAuthenticatedUser._id, chatUser?.currentChatId))
  }, [chatUser, currentAuthenticatedUser._id, dispatch])

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