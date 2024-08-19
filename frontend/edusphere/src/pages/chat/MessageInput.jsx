import React, { useState } from 'react';

export const MessageInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = () => {
        console.log('MESSAGE SENT');
        // You can add further functionality to send the message here
        setInputValue(''); // Clear the input after sending
    };

    return (
        <div className="flex items-center p-4 bg-gray-200 rounded-b-lg shadow-md">
            <textarea
                placeholder='Type your message'
                value={inputValue}
                onChange={handleInputChange}
                className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
                onClick={handleSendMessage}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Send
            </button>
        </div>
    );
};
