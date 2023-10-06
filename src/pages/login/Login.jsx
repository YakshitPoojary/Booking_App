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
    <body>  
      <Navbar/>
      <form className="login-form" method="post">
        <div className="login-header">Login</div>

        <div className="form-group">
          <label className="form-label" htmlFor="username">Username</label>
          <input type="text" name="username" id="username" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>

        <div className="login-button">
          <input className="btn btn-primary btn-md" type="submit" value="Login" />
        </div>

        <div className="login-links">
          <div>
            <button onClick={handleRegister}>Forgot Password</button>
          </div>
          <div>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>

      </form>
    </body>
  );
};

export default Login;
