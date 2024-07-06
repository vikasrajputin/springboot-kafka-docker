import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatReceiver.css';

const ChatReceiver = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get('http://localhost:8082/api/chat/consume/messages');
      setMessages(response.data);
    };

    const interval = setInterval(fetchMessages, 3000); // Fetch messages every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat-receiver">
      <h2>Received Messages</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatReceiver;
