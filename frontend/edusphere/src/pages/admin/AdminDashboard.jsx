import React, { useEffect, useState } from 'react'
import { SideBar } from './common/SideBar'
import Header from './common/Header'
import Footer from '../user/common/Footer'

export const AdminDashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);

    // Fetch data from the API
    useEffect(() => {
        fetch('http://127.0.0.1:8000/dashboard/admin')
            .then(response => response.json())
            .then(data => setDashboardData(data))
            .catch(error => console.error('Error fetching dashboard data:', error));
    }, []);

    return (
        <>
            <div className="flex min-h-screen">
                <SideBar />
                <div className="flex-grow flex flex-col">
                    <Header />
                    <div className="p-4 flex flex-col space-y-4">
                        {/* Dashboard Title */}
                        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                        {/* Show a loading state until the data is available */}
                        {dashboardData ? (
                            <div className="flex space-x-8">
                                <div className="bg-gradient-to-r from-blue-400 to-gray-400 text-white p-6 rounded-lg shadow-lg flex-1 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
                                    <div className="text-2xl">${dashboardData.total_revenue}</div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-400 to-gray-400 text-white p-6 rounded-lg shadow-lg flex-1 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Total Instructors</h3>
                                    <div className="text-2xl">{dashboardData.total_instructors}</div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-400 to-gray-400 text-white p-6 rounded-lg shadow-lg flex-1 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Total Students</h3>
                                    <div className="text-2xl">{dashboardData.total_students}</div>
                                </div>
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
