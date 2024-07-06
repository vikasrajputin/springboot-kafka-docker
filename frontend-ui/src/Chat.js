import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const stompClientRef = useRef(null);  // Using useRef to store stompClient

  useEffect(() => {
    connect();
    // Cleanup on unmount
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, []);

  const connect = () => {
    const socket = new SockJS('http://localhost:8081/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        setConnected(true);
        stompClient.subscribe('/topic/messages', (message) => {
          onMessageReceived(message);
        });
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });
    stompClient.activate();
    stompClientRef.current = stompClient;  // Storing stompClient in ref
  };

  const sendMessage = () => {
    if (connected && stompClientRef.current && message.trim() !== '') {
      const chatMessage = {
        content: message,
        type: 'CHAT'
      };
      stompClientRef.current.publish({ destination: '/app/sendMessage', body: JSON.stringify(chatMessage) });
      setMessage('');
    } else {
      console.warn('STOMP connection not established or message is empty');
    }
  };

  const onMessageReceived = (payload) => {
    const message = JSON.parse(payload.body);
    setMessages((prevMessages) => [...prevMessages, message.content]);
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div id="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
