import React from 'react';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { Sidebar } from './Sidebar';

export const ChatArea = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4">
        <div className="bg-gray-200 p-2 rounded-t-lg shadow-md">
          <h1 className="text-lg font-semibold">Chat Header</h1>
        </div>
        <div className="flex-1 overflow-y-auto mt-4">
          <div className="space-y-4">
            <Message text='Hey, how’s it going?' sent />
            <Message text='I am good, thanks!' received />
          </div>
        </div>
        <MessageInput />
      </div>
    </div>
  );
};
