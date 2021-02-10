import React from 'react';
import './Login.css';
// import img from '../../ghost.jpg'
import { Button } from '@material-ui/core';

function Login() {
    const signIn = () => {

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