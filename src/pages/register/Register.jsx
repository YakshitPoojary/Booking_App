import React from "react";
import "./register.css"

const Register = () => {

    return (
        <>
        <body className="regBody">
            <div className="register">
                <h1 className="reTitle">Register</h1>
                <div className="inputs">
                    <input className="rInput" type="text" id="username" placeholder="First Name"/>
                    <input type="email" id="email" className="rInput" placeholder="Email"/>
                    <input className="rInput" type="password"  id="password" placeholder="Password"/>
                    <input className="rInput" type="text"  id="country" placeholder="Country"/>
                    <input className="rInput" type="text"  id="city" placeholder="City"/>               
                    <input className="rInput" type="text"  id="phone" placeholder="+1 234 567 89"/>
                </div>
                <div class="footer">
                    <button className="btn">Go!</button>
                </div>
            </div>      
        </body>
        </>
  )       
}

export default Register