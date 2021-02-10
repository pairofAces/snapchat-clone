import React from 'react';
import './Login.css';
// import img from '../../ghost.jpg'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../../firebase';
import { login } from '../../features/appSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch(login({
                usename: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            }))
        })
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn3.iconfinder.com/data/icons/popular-social-media-glyph/48/Sed-15-512.png" alt=""/>
                <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login;