import React from 'react';
import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h2 data-test="counter-display">The counter is currently: </h2>
      <button data-test="increment-button">Add</button>
    </div>
  );
}

export default App;
