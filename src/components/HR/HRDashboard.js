
import React, { useState } from 'react';
import DashboardList from '../Dashboard/DashboardList';

const HRDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState(() => {
    // Simulate fetching leave requests from local storage
    return JSON.parse(localStorage.getItem('leaveRequests')) || [];
  });

  const handleApproveReject = (index, action) => {
    // Simulate updating the leave request status
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = action;
    setLeaveRequests(updatedRequests);

    // Update local storage
    localStorage.setItem('leaveRequests', JSON.stringify(updatedRequests));
  };

  return (
    <div className="min-h-screen p-4 bg-slate-700 text-white">
    <h2 className="text-2xl font-bold mb-4 text-center">HR Dashboard</h2>
     
      <DashboardList leaveRequests={leaveRequests} handleApproveReject={handleApproveReject} />
    </div>
  );
};

export default HRDashboard;
