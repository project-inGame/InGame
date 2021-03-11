import React from 'react'

const Login = () => {
    return (
        <div className="loginBox">
            <h3>Email</h3>
            <input className="eBar" type="text" placeholder="Email..."></input>
            <h3>Password</h3>
            <input className="pBar" type="text" placeholder="Password"></input>
            <button className="sBtn">Submit</button>
        </div>
    )
}

export default Login
