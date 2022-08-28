import React from "react";
import Avatar from "../avatar/Avatar";

const ChatListItem = (props) => {
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
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${props.active ? props.active : ""
        } `}
    >
      <Avatar
        image={
          props.image ? props.image : "http://placehold.it/80x80"
        }
        isOnline={props.isOnline}
      />

      <div className="userMeta">
        <p>{props.name}</p>
        <span className="activeTime">Group</span>
      </div>
    </div>
  );
}

export default ChatListItem
