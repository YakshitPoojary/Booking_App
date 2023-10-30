import React from "react";
import "./forgot.css"
import {useState} from "react"; 
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value)
        setSubmitted(false);
    }
    

    const handleClick = async e => {
        e.preventDefault()
        try{
            const newUser = {
              email,phone,password
            };
      
            await axios.post("https://bookkaro.onrender.com/auth/reset", newUser)
            setSubmitted(true)
            alert("User created!🎉");
            window.location.assign("/login")

          }catch(err){
            console.log(err)
            alert(err.response.data.message);
          }
        };


    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="header">
                    <div className="text">Change Password</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="email" onChange={handleEmail} placeholder="Email" id="email"/>
                    </div>
                    <div className="input">
                        <input type="text" onChange={handlePhone} placeholder="Mobile Number" id="phone"/>
                    </div>
                    <div className="input">
                        <input type="password" onChange={handlePassword} placeholder="Password" id="password"/>
                    </div>
                </div>

                <div className="submit-container">
                    <button className="submit" type="submit" onClick={handleClick}>Change</button>
                </div>
            </div>
        </div>
  )       
}

export default Register