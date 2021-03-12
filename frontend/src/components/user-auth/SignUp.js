// import { setupMaster } from "cluster";
import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const getResponse = async (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:5000/auth/signup", { 
            name, email, password, passwordVerify
        })
        .then((res) => {
            console.log(res);
            alert("Account created");
            setName("");
            setEmail("");
            setPassword("");
            setPasswordVerify("");
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("email", res.data.email);
        });
    };
    
    const onChangeHandler = (e) => {
        if (e.target.id === "name") {
          setName(e.target.value);
        } else if (e.target.id === "email") {
          setEmail(e.target.value);
        } else if (e.target.id === "password") {
          setPassword(e.target.value);
        } else if (e.target.id === "passwordVerify") {
          setPasswordVerify(e.target.value);
        }
      };
    
    return (
        <div className="userSignUp">
            <div>
                <div className="signupBG">
    
                </div>
                <div className="SignupTxt">
                    <h1>Sign up today for exclusive membership discounts</h1>
    
                </div>
                <form className="SignUpInput" onSubmit={getResponse}>
                    <h3>Name</h3>
                    <input className="nameIn" id="name" type="text" placeholder="Enter name.." onChange={onChangeHandler} value={name}></input>
                    <h3>Email</h3>
                    <input className="emailIn" id="email" type="text" placeholder="Enter email.." onChange={onChangeHandler} value={email}></input>
                    <h3>Password</h3>
                    <input className="passIn" id="password" type="password" placeholder="Enter password.." onChange={onChangeHandler} value={password}></input>
                    <h3>Verify Password</h3>
                    <input className="passVerify" id="passwordVerify" type="password" placeholder="Enter password.." onChange={onChangeHandler} value={passwordVerify}></input>
                    <div><input className="submitButton" type="submit"></input></div>
                </form>
            </div>
        </div>
        )
}

export default SignUp;