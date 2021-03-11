import React from 'react'
import "./Login.css";

const Login = () => {
    return (
        <div className="loginBox">
            <h3 id="emailBar">Email&nbsp;<input className="eBar" type="text" placeholder="Email..."></input></h3>
            <h3 id="passBar">Password&nbsp;<input className="pBar" type="password" placeholder="Password"></input></h3>
            <button className="sBtn">Sign In</button>&nbsp;
            <button className="signUpBtn">Sign Up</button>&nbsp;
        </div>
    )
}

export default Login;
