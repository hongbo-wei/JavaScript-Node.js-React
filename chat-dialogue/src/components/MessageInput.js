import React, { useState } from 'react';
import '../style.css';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        // If Shift + Enter is pressed, add a new line
        setMessage(message + '\n');
      } else {
        // If Enter is pressed without Shift, send the message
        e.preventDefault();
        handleSend();
      }
    }
  };

  return (
    <div className="message-input">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}  // Handle both Enter and Shift+Enter
        placeholder="Type a message..."
        rows={3}  // Adjust the number of visible rows as needed
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
