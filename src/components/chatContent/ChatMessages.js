import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../global/actions/messages'
import MessageItem from "./MessageItem"

const ChatMessages = ({ chatUser, scrollRef }) => {
  const dispatch = useDispatch()
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const messages = useSelector((state) => state.getMessagesReducer.messages)

  useEffect(() => {
    console.log("CHAT USER: ", chatUser);
    if (Object.keys(chatUser).length !== 0) {
      dispatch(getMessages(currentAuthenticatedUser._id, chatUser?.currentChatId))
    }
  }, [chatUser, currentAuthenticatedUser._id, dispatch])

  return (
    <div className="content__body">
      <div className="chat__items">
        {messages && messages.map((itm) => {
          return (
            <React.Fragment key={itm._id} ref={scrollRef}>
              <MessageItem
                sender={itm.sender}
                user={itm.senderId === currentAuthenticatedUser._id ? "me" : "other"}
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