import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees] = useState(['Alice', 'Bob', 'Charlie']);
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 0); // Force re-render
  };

  return (
    <div className="App">
      <h1>Employee Time Tracking</h1>
      <button onClick={handleReset} className="reset-btn">
        Reset All Time Tracking
      </button>
      <EmployeeList employees={employees} reset={reset} />
    </div>
  );
}

export default App;
