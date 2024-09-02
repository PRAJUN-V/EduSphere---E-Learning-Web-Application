import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { SideBar } from './common/SideBar';
import Header from './common/Header';
import Footer from '../user/common/Footer';

export const InstructorChatroom = () => {
    const [chatrooms, setChatrooms] = useState([]);
    const [selectedChatroom, setSelectedChatroom] = useState(null);

    // Function to get user ID from token
    const getUserIdFromToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            return decoded.user_id; // Adjust if the user ID is stored under a different key
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    useEffect(() => {
        // Retrieve the token from local storage
        const token = localStorage.getItem('access'); // Adjust as needed
        const userId = getUserIdFromToken(token); // Extract user ID from token

        if (userId) {
            // Fetch chatrooms based on the user ID
            fetch(`http://127.0.0.1:8000/chat/instructor/chatroom/${userId}/`)
                .then(response => response.json())
                .then(data => setChatrooms(data))
                .catch(error => console.error('Error fetching chatrooms:', error));
        }
    }, []);

    return (
        <>
            <div className="flex min-h-screen">
                <SideBar />
                <div className="flex-grow flex flex-col">
                    <Header />
                    <main className="p-4 flex">
                        {/* Chatroom List */}
                        <div className="w-1/4 pr-4">
                            <h1 className="text-2xl font-bold mb-4">Chat Rooms</h1>
                            <ul className="space-y-2">
                                {chatrooms.map(chatroom => (
                                    <li key={chatroom.id}>
                                        <button
                                            onClick={() => setSelectedChatroom(chatroom)}
                                            className={`block py-2 px-4 w-full text-left hover:bg-blue-100 ${selectedChatroom && selectedChatroom.id === chatroom.id ? 'bg-blue-100' : ''
                                                }`}
                                        >
                                            {chatroom.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dummy Chat Area */}
                        <div className="w-3/4 pl-4 border-l border-gray-300">
                            <h2 className="text-xl font-bold mb-4">
                                {selectedChatroom ? selectedChatroom.name : "Select a Chatroom"}
                            </h2>
                            <div className="bg-white p-4 rounded-lg shadow-lg h-96 overflow-y-auto">
                                {selectedChatroom ? (
                                    <>
                                        <p>This is a dummy chat area for chatroom: {selectedChatroom.name}</p>
                                        <p>You can add chat messages here.</p>
                                    </>
                                ) : (
                                    <p>Select a chatroom to see the messages.</p>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};
