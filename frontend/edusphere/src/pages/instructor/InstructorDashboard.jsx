// src/components/InstructorDashboard.js
import React from 'react';
import { SideBar } from './common/SideBar';
import Header from './common/Header';
import Footer from '../user/common/Footer';
export const InstructorDashboard = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <Header />
          <main className="p-4 flex-grow ">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
