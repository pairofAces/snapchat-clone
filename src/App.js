import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1> Let's build this snapchat clone!</h1>
      <Router>
        <div className="app__body">
        <Switch>
          <Route path="/about">
            <h1>This will be the about page</h1>
            {/* <About /> */}
          </Route>
          <Route exact path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </div>
    </Router>
      {/* react-webcam to use camera capabilities */}
    </div>
  );
}

export default App;
