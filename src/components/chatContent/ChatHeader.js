import React from 'react'
import Avatar from "../avatar/Avatar"

const ChatHeader = () => {
  return (
    <div className="content__header">
      <div className="blocks">
        <div className="current-chatting-user">
          <Avatar isOnline="active"
            image="https://c0.wallpaperflare.com/preview/500/556/924/doberman-dog-beauty-nature.jpg"
          />
          <p>Common Chat</p>
        </div>
      </div>

      <div className="blocks">
        <div className="settings">
          <button className="btn-nobg">
            <i className="fa fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader