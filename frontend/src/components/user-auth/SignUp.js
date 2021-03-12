import { setupMaster } from "cluster";
import React, { useState } from "react";

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
        <form onSubmit={getResponse}></form>
    </div>
    //use <form onSubmit={getResponse} form
) 

export default SignUp;
