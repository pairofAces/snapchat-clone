import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1> Let's build this snapchat clone!</h1>

      {/* react-webcam to use camera capabilities */}
      <webcamCapture />
    </div>
  );
}

export default App;
