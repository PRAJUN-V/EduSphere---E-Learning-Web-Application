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
      <div className="flex flex-col h-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Chat Room: {roomName}</h2>
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-lg">
                {msg}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 p-4 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    );
}

export default ChatComponent;
