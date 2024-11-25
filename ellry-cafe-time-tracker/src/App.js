App.jsimport React, { useState } from 'react';

// Simple App Component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to the Time Tracker App!</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
