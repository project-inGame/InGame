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

const getResponse =async (e) => {
    e.preventDefault();

    axios.post("http://local:5000/signup", { 
        name:
        email:
        password:
        passwordVerify:
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

//on change handler, 

return (
    <div className="userSignUp">
        <div>
            <Navbar />
            <div className="signupBG">

            </div>
            <div className="SignupTxt">
                <h1>Sign up today for exclusive membership discounts</h1>

            </div>
            <div className="SignUpInput">
                <h3>Name</h3>
                <input className="nameIn" type="text" placeholder="Enter Name..."></input>
                <h3>Email</h3>
                <input className="emailIn" type="text" placeholder="Enter email..."></input>
                <h3>Password</h3>
                <input className="passIn" type="password" placeholder="Enter password..."></input>

            </div>
            <div className="Footer">
            <Footer />
            </div>

        </div>
    )
}
        <form onSubmit={getResponse}></form>
    </div>
    //use <form onSubmit={getResponse} form
) 

export default SignUp;
