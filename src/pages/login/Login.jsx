import React from 'react';
import axios from 'axios';
import "./login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";


const Login = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://bookkaro.onrender.com/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <Navbar />
      <form action="">
        <div className="Logincontainer">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Email" onChange={(e) => handleChange(e)} />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
            </div>
          </div>

          <div className="submit-container">
            <button className="submit" onClick={(e) => handleClick(e)}>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
