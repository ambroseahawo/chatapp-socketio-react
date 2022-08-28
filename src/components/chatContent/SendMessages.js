import React, { useState } from 'react'

const SendMessages = () => {
  const [message, setMessage] = useState("")

  const handleClick = () =>{
    console.log({text: message});
  }

  return (
    <div className="content__footer">
      <div className="sendNewMessage">
        <button className="addFiles">
          <i className="fa fa-plus"></i>
        </button>
        <input
          type="text"
          placeholder="Type a message here"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="btnSendMsg" id="sendMsgBtn" onClick={handleClick}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

export default SendMessages