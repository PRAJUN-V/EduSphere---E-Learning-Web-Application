import React from 'react';

export const Message = ({ text, sent }) => {
  return (
    <div className={`flex ${sent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-white shadow-md ${
          sent ? 'bg-blue-500' : 'bg-gray-500'
        }`}
      >
        {text}
      </div>
    </div>
  );
};
