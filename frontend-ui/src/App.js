import React from 'react';
import ChatSender from './components/ChatSender';
import ChatReceiver from './components/ChatReceiver';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="chat-container">
        <ChatSender />
        <ChatReceiver />
      </div>
    </div>
  );
};

export default App;
