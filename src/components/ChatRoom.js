import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import Header from "./Header";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Math.random().toString(),
      message: message,
      username: getRandomUsername(),
      timestamp: Date.now(),
      likes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const handleLikeClick = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    );
    setMessages(updatedMessages);
  };

  const getRandomUsername = () => {
    const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];
    const randomIndex = Math.floor(Math.random() * userList.length);
    return userList[randomIndex];
  };

  return (
    <div className="chat-room-wrapper">
      <Header />
      <div className="message-box-container">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            username={msg.username}
            likes={msg.likes}
            timestamp={msg.timestamp}
            onLikeClick={() => handleLikeClick(msg.id)}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
