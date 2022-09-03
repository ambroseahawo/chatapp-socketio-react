import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getExistingChats } from "../../global/actions/chats";
import ChatListItem from "./ChatListItem";
import "./chats.css";

const ChatList = () => {
  const currentAuthenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
  const chatUsers = useSelector((state) => state.getChatsReducer.chats)
  const dispatch = useDispatch()

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
        {chatUsers && chatUsers.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ChatListItem
                name={item.username}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.profilePicture}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
