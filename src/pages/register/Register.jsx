import React from "react";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/login")
  }

  return (
    <div>
      <Navbar />
      <form action="">
        <div className="container">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Name"/>
            </div>
            <div className="input">
              <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
              <input type="password" placeholder="Password"/>
            </div>
            <div className="input">
              <input type="text" placeholder="Country"/>
            </div>
            <div className="input">
              <input type="number" placeholder="Phone Number"/>
            </div>
          </div>

          <div className="submit-container">
            <div className="submit" >Sign up</div>
            <div className="submit" onClick={handleRegister}>Login</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
