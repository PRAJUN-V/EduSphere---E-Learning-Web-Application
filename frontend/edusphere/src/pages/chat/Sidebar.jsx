import React from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/outline';

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <HomeIcon className="h-5 w-5 mr-2" />
          Home
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <UserIcon className="h-5 w-5 mr-2" />
          Profile
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <CogIcon className="h-5 w-5 mr-2" />
          Settings
        </a>
      </nav>
    </div>
  );
};
