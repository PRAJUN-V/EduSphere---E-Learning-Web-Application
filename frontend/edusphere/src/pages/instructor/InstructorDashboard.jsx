import React from 'react'
import { SideBar } from './common/SideBar'
import Header from './common/Header'

export const InstructorDashboard = () => {
  return (
    <div className="flex">
            <SideBar />
            <div className="flex-grow flex flex-col">
                <Header />
                {/* Other content */}
            </div>
        </div>
  )
}
