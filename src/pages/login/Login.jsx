import React from 'react';
import "./login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";



const Login = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/register")
  }

  return (
    <div>
      <Navbar/>
      <form action="">
        <div className="Logincontainer">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
              <input type="password" placeholder="Password"/>
            </div>
          </div>

          <div className="submit-container">
            <div className="submit" onClick={handleRegister}>Sign up</div>
            <div className="submit">Login</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
