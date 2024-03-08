
import React, { useState } from 'react';

const EmployeeLeaveForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    // Simulate storing the leave request in local storage
    if (!leaveType || !startDate || !endDate || !reason) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    const leaveRequest = {
      leaveType,
      startDate,
      endDate,
      reason,
      status: 'Pending', // Initial status when submitted
    };

    const existingLeaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    const updatedLeaveRequests = [...existingLeaveRequests, leaveRequest];
    localStorage.setItem('leaveRequests', JSON.stringify(updatedLeaveRequests));

    // Clear form fields after submission
    setLeaveType('');
    setStartDate('');
    setEndDate('');
    setReason('');

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Leave Request Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="leaveType" className="block text-white text-sm font-bold mb-2">
              Leave Type:
            </label>
            <input
              type="text"
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full border rounded p-2 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-white text-sm font-bold mb-2">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border rounded p-2 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-white text-sm font-bold mb-2">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border rounded p-2 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-white text-sm font-bold mb-2">
              Reason:
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border rounded p-2 bg-gray-700 text-white"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLeaveForm;
