import React from 'react'
import { SideBar } from './common/SideBar'
import Header from './common/Header'
import Footer from '../user/common/Footer'
export const InstructorDashboard = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <Header />
          {/* Other content */}
        </div>
      </div>
      <Footer />
    </>
  )
}
