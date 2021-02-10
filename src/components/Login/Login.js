import React from 'react';
import './Login.css';
import img from '../../ghost.jpg'
import { Button } from '@material-ui/core';

function Login() {
    const signIn = () => {

    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src={img} alt=""/>
                <Button variant="outline" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login;