import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux"
import Avatar from "../avatar/Avatar";

const ChatListItem = ({ chat, currentUserId }) => {
  const dispatch = useDispatch()
  const [chatUser, setChatUser] = useState([])

  useEffect(() => {
    // get friend data
    const friendId = chat.members.find((m) => m !== currentUserId)
    const getUser = async () => {
      try {
        const res = await axios(`${process.env.REACT_APP_BASE_URL}/users?userId=${friendId}`)
        setChatUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [chat.members, currentUserId, dispatch])

  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  return (
    <div className={`chatlist__item ${chatUser?.active ? chatUser.active : ""}`}>
      <Avatar
        image={chatUser?.profilePicture
          ? chatUser.profilePicture
          : "https://i.pravatar.cc/150?img=33"}
        isOnline={chatUser?.isOnline} />
      <div className="userMeta">
        <p>{chatUser?.username}</p>
        {/* <span className="activeTime">Group</span> */}
      </div>
    </div>
  );
}

export default ChatListItem
