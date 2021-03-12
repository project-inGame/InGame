import { setupMaster } from "cluster";
import React, { useState } from "react";
import Navbar from "./components/navbar/navbar.js";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import "font-awesome/css/font-awesome.min.css";

function SignUp() {
    return (
        <div>
            name:
            email:
            password:
            passwordVerify:
        </div>
    )
}

const getResponse = async (e) => {
    e.preventDefault();

    axios.post("http://local:5000/signup", { 
        name: "",
        email: "",
        password: "",
        passwordVerify: ""
    })
    .then((res) => {
        console.log(res);
        alert("Accounted created");
        setUser("");
        setEmail("");
        setPassword("")
        sessionStorage.setItem("loggedIn", true);
        sessionStorage.setItem("email", res.data.email);
    });
};

// onChangeHandler() {

// } 

return (
    <div className="userSignUp">
        <div>
            <Navbar />
            <div className="signupBG">

            </div>
            <div className="SignupTxt">
                <h1>Sign up today for exclusive membership discounts</h1>

            </div>
            <form className="SignUpInput" onSubmit={getResponse}>
                <h3>Name</h3>
                <input className="nameIn" type="text" placeholder="Enter name.."></input>
                <h3>Email</h3>
                <input className="emailIn" type="text" placeholder="Enter email.."></input>
                <h3>Password</h3>
                <input className="passIn" type="password" placeholder="Enter password.."></input>

            </form>
            <div className="Footer">
            <Footer />
            </div>

        </div>
    </div>
    )

export default SignUp;
