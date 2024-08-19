import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import '../style.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Bot response', isUser: false }
      ]);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
