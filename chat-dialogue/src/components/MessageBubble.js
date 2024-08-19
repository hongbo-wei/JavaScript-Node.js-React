import React from 'react';
import '../style.css';

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`message-bubble ${isUser ? 'user-bubble' : 'bot-bubble'}`}>
      <div className="bubble-content">
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
