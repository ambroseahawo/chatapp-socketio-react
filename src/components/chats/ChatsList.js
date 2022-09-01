import React, { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import ChatListItem from "./ChatListItem";
import "./chats.css";

const ChatList = () => {
  const [chats, setChats] = useState([])
  const [cookies] = useCookies(["authenticatedUser"])

  useEffect(() => {
    const currentAuthenticatedUserId = cookies.authenticatedUser?._id
  })

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
            <ChatListItem
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
