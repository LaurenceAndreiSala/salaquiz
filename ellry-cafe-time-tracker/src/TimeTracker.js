import React, { useState, useEffect } from 'react';

function TimeTracker({ employee, reset }) {
  const [status, setStatus] = useState('Clocked Out');
  const [lastTime, setLastTime] = useState(null);
  const [totalHours, setTotalHours] = useState(0);
  const [clockInTime, setClockInTime] = useState(null);

  const handleClockInOut = () => {
    const currentTime = new Date();

    if (status === 'Clocked Out') {
      // Clock In
      setStatus('Clocked In');
      setClockInTime(currentTime);
      setLastTime(currentTime.toLocaleString());
    } else {
      // Clock Out
      const workedHours = (currentTime - clockInTime) / 1000 / 60 / 60; // convert ms to hours
      setTotalHours(totalHours + workedHours);
      setStatus('Clocked Out');
      setLastTime(currentTime.toLocaleString());
    }
  };

  // If reset happens, clear the state
  useEffect(() => {
    if (reset) {
      setStatus('Clocked Out');
      setTotalHours(0);
      setClockInTime(null);
      setLastTime(null);
    }
  }, [reset]);

  useEffect(() => {
    if (status !== 'Clocked Out') {
      console.log(`${employee} is ${status} at ${lastTime}`);
    }
  }, [status, lastTime, employee]);

  return (
    <div className="time-tracker">
      <h3>{employee}</h3>
      <p>Status: {status}</p>
      <p>Last Time: {lastTime || 'N/A'}</p>
      <p>Total Hours Worked: {totalHours.toFixed(2)} hrs</p>
      <button onClick={handleClockInOut} className="clock-btn">
        {status === 'Clocked Out' ? 'Clock In' : 'Clock Out'}
      </button>
    </div>
  );
}

export default TimeTracker;