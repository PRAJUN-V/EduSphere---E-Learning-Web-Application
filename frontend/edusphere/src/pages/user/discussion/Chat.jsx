import React, { useState, useEffect } from 'react';
import { Header } from '../common/Header';
import { SubHeader } from '../common/SubHeader';
import { jwtDecode } from 'jwt-decode'; // Remove the curly braces

export const Chat = () => {
    const [chatrooms, setChatrooms] = useState([]);
    const [selectedChatroom, setSelectedChatroom] = useState(null);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        // Get the token from localStorage (or however you store it)
        const token = localStorage.getItem('access');
        const decodedToken = jwtDecode(token);
        const studentId = decodedToken.user_id;  // Get the student ID from the token

        // Fetch chatrooms related to the student using the student ID
        fetch(`http://127.0.0.1:8000/chat/student/chatroom/${studentId}/`)
            .then(response => response.json())
            .then(data => setChatrooms(data))
            .catch(error => console.error('Error fetching chatrooms:', error));
    }, []);

    // Dummy handler for sending a new message
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log(`Message sent to chatroom ${selectedChatroom}: ${newMessage}`);
            setNewMessage("");
        }
    };

    return (
        <>
            <Header />
            <SubHeader />
            <div className="flex p-4">
                {/* Chatroom List */}
                <div className="w-1/4 border-r">
                    <h2 className="text-lg font-bold mb-2">Chatrooms</h2>
                    <ul>
                        {chatrooms.map((chatroom) => (
                            <li
                                key={chatroom.id}
                                onClick={() => setSelectedChatroom(chatroom.id)}
                                className={`p-2 cursor-pointer ${selectedChatroom === chatroom.id ? 'bg-gray-200' : ''}`}
                            >
                                {chatroom.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dummy Chat Field */}
                <div className="w-3/4 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-bold mb-2">
                        {selectedChatroom ? `Chat Room: ${chatrooms.find(room => room.id === selectedChatroom)?.name}` : 'Select a chat room'}
                    </h2>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-grow p-2 border rounded"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            disabled={!selectedChatroom}
                        />
                        <button
                            className="ml-2 p-2 bg-blue-500 text-white rounded"
                            onClick={handleSendMessage}
                            disabled={!selectedChatroom}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
