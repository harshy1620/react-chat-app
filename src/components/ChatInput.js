import React, { useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [mention, setMention] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    // Detect mention
    const lastWord = value.split(" ").pop();
    if (lastWord.startsWith("@")) {
      setMention(lastWord.substring(1)); // Exclude '@'
      // Provide suggestions (you might fetch suggestions from an API)
      const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];
      const filteredSuggestions = userList.filter((username) =>
        username.toLowerCase().includes(lastWord.substring(1).toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setMention("");
      setSuggestions([]);
    }
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const handleMentionSelect = (username) => {
    setMessage((prevMessage) =>
      prevMessage.replace(new RegExp(`@${mention}$`), `@${username} `)
    );
    setMention("");
    setSuggestions([]);
  };

  return (
    <div className="chat-input-main-container">
      <div className="chat-input-box">
        <MdEmojiEmotions
          className="emoji-icon"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onFocus={() => setShowEmojiPicker(false)}
        />
        <IoSend onClick={handleSendClick} className="send-icon" />
      </div>
      {showEmojiPicker && (
        <div className="emoji-picker">
          <EmojiPicker onEmojiClick={handleEmojiSelect} />
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="mention-suggestions">
          {suggestions.map((username) => (
            <div key={username} onClick={() => handleMentionSelect(username)}>
              {username}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatInput;
