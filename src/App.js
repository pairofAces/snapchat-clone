import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture/WebcamCapture';
import Preview from './components/Preview/Preview';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Chats from './components/Chats/Chats';
import ChatView from './components/ChatView/ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {/* <h1> Let's build this snapchat clone!</h1> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
          <Switch>
            <Route exact path="/about">
              <h1>This will be the about page</h1>
              {/* <About /> */}
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
            <Route exact path="/chats">
              <Chats />
            </Route>
            <Route exact path="/chats/view">
              <ChatView />
            </Route>
          </Switch>
        </div>
        )}
    </Router>
      {/* react-webcam to use camera capabilities */}
    </div>
  );
}

export default App;
