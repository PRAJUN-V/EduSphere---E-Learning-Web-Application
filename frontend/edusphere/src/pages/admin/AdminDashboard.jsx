import React from 'react'
import { SideBar } from './common/SideBar'
import Header from './common/Header'

export const AdminDashboard = () => {
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-grow flex flex-col">
                <Header />
                <div>Dashboard</div>
            </div>
        </div>
    )
}
