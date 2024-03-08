
import React, { useMemo } from 'react';

const EmployeeLeaveStatus = () => {
  // Retrieve leave requests from local storage
  const leaveRequests = useMemo(() => {
    return JSON.parse(localStorage.getItem('leaveRequests')) || [];
  }, []);

  return (
    <div className="min-h-screen p-4 bg-slate-700 text-white">
    <h2 className="text-2xl font-bold mb-4 text-center">Leave Request Status</h2>
        {leaveRequests.length > 0 ? (
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-slate-950">
               
                <th className="border border-gray-600 p-2 text-white">Leave Type</th>
                <th className="border border-gray-600 p-2 text-white">Start Date</th>
                <th className="border border-gray-600 p-2 text-white">End Date</th>
                <th className="border border-gray-600 p-2 text-white">Reason</th>
                <th className="border border-gray-600 p-2 text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request, index) => (
                <tr key={index} className={(index % 2 === 0) ? 'bg-gray-800 ' : 'bg-gray-600' }>
                
                  <td className="border border-gray-600 p-2 text-white text-center">{request.leaveType}</td>
                  <td className="border border-gray-600 p-2 text-white text-center">{request.startDate}</td>
                  <td className="border border-gray-600 p-2 text-white text-center">{request.endDate}</td>
                  <td className="border border-gray-600 p-2 text-white text-center">{request.reason}</td>
                  <td className="border border-gray-600 p-2 text-white text-center">
                  {request.status === 'Approved' && (
                    <div className="flex justify-center items-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700">Approved</span>
                    </div>
                  )}
                   {request.status === 'Pending' && (
                    <div className="flex justify-center items-center">
                      <span className="ml-2 bg-orange-500 text-white px-2 py-2 rounded hover:bg-orange-700">Pending</span>
                    </div>
                  )}
                  {request.status === 'Rejected' && (
                    <div className="flex justify-center items-center">
                      <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Rejected</span>
                    </div>
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-white">No leave requests submitted.</p>
        )}
      </div>
  
  );
};

export default EmployeeLeaveStatus;
