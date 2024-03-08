import React from 'react';

const DashboardList = ({ leaveRequests, handleApproveReject }) => {
  return (
    <div>
      {leaveRequests.length > 0 ? (
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-slate-950">
              <th className="border border-gray-600 p-2 text-white">Leave Type</th>
              <th className="border border-gray-600 p-2 text-white">Start Date</th>
              <th className="border border-gray-600 p-2 text-white">End Date</th>
              <th className="border border-gray-600 p-2 text-white">Reason</th>
              <th className="border border-gray-600 p-2 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request, index) => (
              <tr key={index} className={(index % 2 === 0) ? 'bg-gray-700' : 'bg-gray-800'}>
                <td className="border border-gray-600 p-2 text-center text-white">{request.leaveType}</td>
                <td className="border border-gray-600 p-2 text-center text-white">{request.startDate}</td>
                <td className="border border-gray-600 p-2 text-center text-white">{request.endDate}</td>
                <td className="border border-gray-600 p-2 text-center text-white">{request.reason}</td>
                <td className="border border-gray-600 p-2">
                  {request.status === 'Pending' ? (
                    <>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => handleApproveReject(index, 'Approved')}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleApproveReject(index, 'Rejected')}
                          className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {request.status === 'Approved' && (
                        <div className="flex justify-center items-center">
                          <span className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700">Approved</span>
                        </div>
                      )}
                      {request.status === 'Rejected' && (
                        <div className="flex justify-center items-center">
                          <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Rejected</span>
                        </div>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leave requests submitted.</p>
      )}
    </div>
  );
};

export default DashboardList;
