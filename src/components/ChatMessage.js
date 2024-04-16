import React, { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";

const ChatMessage = ({ message, username, likes, timestamp, onLikeClick }) => {
  const [userColor, setUserColor] = useState(null);
  const messageTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    // Generate a random color for the user if it's not already set
    if (!userColor) {
      const colors = ["red", "yellow", "green", "blue", "orange", "pink"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setUserColor(randomColor);
    }
  }, [userColor]);

  return (
    <div className="message-container">
      <div className="upperline">
        <p className="user-first-letter" style={{ backgroundColor: userColor }}>
          {username.charAt(0)}
        </p>
        <p className="user-name">{username}</p>
        <p className="time">{messageTime}</p>
      </div>
      <div className="lower-line">
        <p className="user-message">{message}</p>
        <div className="like-button">
          <BiLike onClick={onLikeClick} />
          {likes}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
