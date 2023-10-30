import React, { useState } from "react";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [err, setErr] = useState(null);
    const [enteredEmail, setEnteredemail] = useState(null);

    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    const handleEmail = (e) => {
        setEnteredemail(e.target.value)
        setEmail(enteredEmail);
        setSubmitted(false);
    };
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted (false);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    }

    const handleClick = async e => {
        e.preventDefault()
        if (!emailPattern.test(enteredEmail)) {
            setErr("Please enter a valid email address");
        } 
        else{
            try {
                
                const newUser = {
                    email, phone, password
                };
          
                await axios.post("https://bookkaro.onrender.com/auth/register", newUser);
                setSubmitted(true);
                alert("User created!🎉");
                window.location.assign("/login");
            } catch (err) {
                console.log(err);
                setErr("Error, please fill each field"); // Set the err state
            }
        }
    };

    return (
        <div>
            <Navbar/>
            {err && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        {err}
                    </Alert>
                </Stack>
            )}
            <form onSubmit={handleClick}>
                <div className="container">
                    <div className="header">
                        <div className="text">Sign Up</div>
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
                        <button className="submit" type="submit" onClick={handleClick}>Register</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Register;
