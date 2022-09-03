import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useCookies } from "react-cookie";
import { getExistingChats } from "../../global/actions/chats";
import { getExistingUser } from "../../global/actions/users";
import ChatListItem from "./ChatListItem";
import "./chats.css";

const ChatList = () => {
  const [cookies] = useCookies(["authenticatedUser"])
  const currentAuthenticatedUserId = cookies.authenticatedUser?._id
  console.log("CURRENT ID: ", currentAuthenticatedUserId)
  const chats = useSelector((state) => state.getChatsReducer.chats)
  const dispatch = useDispatch()

  const [chatUsers, setChatUsers] = useState(null)

  const getChatFriends = (chatArray) =>{
    chatArray?.forEach(chat => {
      const friendId = chat.members.find((m) => m !== currentAuthenticatedUserId)
      console.log(friendId);
      // dispatch(getExistingUser(friendId, setChatUsers))
      // chat.members.forEach(userId =>{
      //   const friendId = conversation.members.find((m) => m !== currentUser._id)
      //   dispatch(getExistingUser(userId, setChatUsers))
      // })
    });
  }

  useEffect(() => {
    dispatch(getExistingChats(currentAuthenticatedUserId))
    console.log("ALL CHATS: ", chats)
    getChatFriends(chats)
  }, [cookies.authenticatedUser?._id, dispatch])

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
                name={item.name}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
