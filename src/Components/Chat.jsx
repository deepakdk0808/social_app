import React from "react";

const Chat = () => {
  const isOnline = true; // Change this based on the user's online status
  const lastActive = "10 minutes ago"; // Change this based on the user's last active time

  return (
    <div className="chat">
      <div className="chat-header">
        <button className="back-button">&larr;</button>
        <div className="user-status">
          <span
            className={`status-dot ${isOnline ? "online" : "offline"}`}
          ></span>
          <div>
            <h1>Username</h1>
            <p>Last active: {lastActive}</p>
          </div>
        </div>
        <button className="call-button">&#128222;</button>
      </div>
      <div className="chat-box">
        <div className="message received">
          <img src="profile-pic1.jpg" alt="Profile 1" />
          <p>User: Hey, how are you?</p>
        </div>
        <div className="message sent">
          <img src="profile-pic2.jpg" alt="Profile 2" />
          <p>You: I'm good, thank you!</p>
        </div>
        {/* Add more chat messages based on the Figma design */}
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Type a message" />
        <button>&#9993;</button>
      </div>
    </div>
  );
};

export default Chat;
