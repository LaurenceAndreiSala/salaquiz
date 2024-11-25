import React from 'react';
import TimeTracker from './TimeTracker';

function EmployeeList({ employees, reset }) {
  return (
    <div>
      {employees.map((employee) => (
        <TimeTracker key={employee} employee={employee} reset={reset} />
      ))}
    </div>
  );
}

export default EmployeeList;