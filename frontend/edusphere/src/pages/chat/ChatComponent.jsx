import React, { useState, useEffect, useRef } from 'react';

function ChatComponent({ roomName }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const ws = useRef(null);
  
    useEffect(() => {
      ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);
  
      ws.current.onopen = () => {
        console.log('WebSocket connection established');
      };
  
      ws.current.onmessage = (event) => {
        console.log('Message received:', event.data);
        const data = JSON.parse(event.data);
        if (data.message) {
          setMessages((prevMessages) => [...prevMessages, data.message]);
        }
      };
  
      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      ws.current.onclose = () => {
        console.log('WebSocket connection closed');
      };
  
      return () => {
        ws.current.close();
      };
    }, [roomName]);
  
    const sendMessage = () => {
      if (input.trim()) {
        ws.current.send(JSON.stringify({ message: input }));
        setInput('');
      }
    };
  
    return (
      <div>
        <div>
          <h2>Chat Room: {roomName}</h2>
          <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll' }}>
            {messages.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    );
  }
  
  export default ChatComponent;
  
