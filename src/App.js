import React, { useEffect } from 'react';
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
import { login, logout, selectUser } from './features/appSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, []);

  return (
    <div className="app">
      {/* <h1> Let's build this snapchat clone!</h1> */}
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app__logo" src="http://pngimg.com/uploads/snapchat/snapchat_PNG29.png" alt=""/>
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
        </>
        )}
    </Router>
      {/* react-webcam to use camera capabilities */}
    </div>
  );
}

export default App;
