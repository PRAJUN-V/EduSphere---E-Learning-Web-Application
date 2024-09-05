import React, { useState, useEffect } from 'react';
import { SubHeader } from '../common/SubHeader';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Header } from '../common/Header';
import Footer from '../common/Footer';

export const Chat = () => {
    const [rooms, setRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [userId, setUserId] = useState(null);

    // Decode the JWT token to get the user ID
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.user_id); // Assuming the JWT contains `user_id`
        }
    }, []);

    // Fetch chat rooms
    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/chat2/rooms/');
            setRooms(response.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    // Fetch messages from the selected chat room
    const fetchMessages = async (roomId) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/chat2/rooms/${roomId}/messages/`);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // Handle selecting a room
    const handleRoomClick = (roomId) => {
        setSelectedRoomId(roomId);
        fetchMessages(roomId);
    };

    // Render the chat message
    const renderMessage = (message, index) => {
        const isUserMessage = message.sender_id === userId;
        const messageClass = isUserMessage ? 'text-right' : 'text-left';
        const containerClass = isUserMessage ? 'bg-blue-100' : 'bg-gray-100';

        return (
            <div key={index} className={`p-2 mb-2 ${messageClass}`}>
                <div className={`inline-block p-2 rounded ${containerClass}`}>
                    <p className="font-bold">{isUserMessage ? 'You' : `${message.sender_name}`}</p>
                    <p>{message.message}</p>
                </div>
            </div>
        );
    };

    // Handle new message input
    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    // Dummy function to handle sending a message (to be implemented later)
    const handleSendMessage = () => {
        // Functionality to send the message will be implemented here
        console.log('Send message:', newMessage);
        setNewMessage('');
    };


    return (
        <>
            <div className="flex min-h-screen">
                <div className="flex-grow flex flex-col">
                    <Header />
                    <SubHeader/>
                    <div className="p-4 flex-grow flex">
                        {/* Chat Rooms List */}
                        <div className="w-1/4 bg-gray-200 p-4">
                            <h2 className="text-xl font-bold mb-4">Chat Rooms</h2>
                            {rooms.map((room) => (
                                <div
                                    key={room.id}
                                    className={`p-2 bg-white rounded shadow cursor-pointer mb-2 ${room.id === selectedRoomId ? 'bg-blue-200' : ''}`}
                                    onClick={() => handleRoomClick(room.id)}
                                >
                                    {room.room_name}
                                </div>
                            ))}
                        </div>

                        {/* Messages Section */}
                        <div className="w-3/4 bg-white p-4 flex flex-col justify-between">
                            {selectedRoomId ? (
                                <>
                                    <div className="overflow-y-auto flex-grow">
                                        {messages.map((message, index) => renderMessage(message, index))}
                                    </div>
                                    <div className="flex mt-4">
                                        <input
                                            type="text"
                                            className="border p-2 flex-grow rounded-l"
                                            placeholder="Type a message"
                                            value={newMessage}
                                            onChange={handleInputChange}
                                        />
                                        <button
                                            className="bg-blue-500 text-white p-2 rounded-r"
                                            onClick={handleSendMessage}
                                        >
                                            Send
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center text-gray-500">Select a chat room to view messages</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};
