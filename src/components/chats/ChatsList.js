import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getExistingChats, putCurrentChat, switchCurrentChat } from "../../global/actions/chats";
import ChatListItem from "./ChatListItem";
import "./chats.css";

const ChatList = () => {
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const chats = useSelector((state) => state.getChatsReducer.chats)
  const dispatch = useDispatch()

  // const [currentChat, setCurrentChat] = useState('')
  const handleSwitchChat = (chat) => {
    dispatch(switchCurrentChat(chat))
    dispatch(putCurrentChat({ userId: currentAuthenticatedUser._id, chatId: chat._id }))
  }

  useEffect(() => {
    dispatch(getExistingChats(currentAuthenticatedUser._id))
  }, [currentAuthenticatedUser._id, dispatch])

  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        <h2>Chat</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatlist__items">
        {chats && chats.map((item, index) => {
          return (
            <div key={index} onClick={() => handleSwitchChat(item)} >
              <ChatListItem chat={item} currentUserId={currentAuthenticatedUser._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
