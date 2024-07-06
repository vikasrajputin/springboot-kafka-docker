import React, { useState } from 'react';
import axios from 'axios';
import './ChatSender.css';

const ChatSender = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (message.trim()) {
      await axios.post('http://localhost:8081/api/chat/send', null, {
        params: {
          message: message.trim(),
        },
      });
      setMessage('');
    }
  };

  return (
    <div className="chat-sender">
      <h2>Send Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatSender;
