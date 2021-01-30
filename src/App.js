import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';

function App() {
  return (
    <div className="app">
      <h1> Let's build this snapchat clone!</h1>

      {/* react-webcam to use camera capabilities */}
      <WebcamCapture />
    </div>
  );
}

export default App;
