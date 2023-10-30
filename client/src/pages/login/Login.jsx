import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleForgot= () =>{
    navigate("/forgot");
  }

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
      alert(err.response.data.message);
      window.location.reload(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="Logincontainer">
        <div className="header">
          <div className="text">Sign In</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className="lInput"
            />
          </div>

          <div className="input">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
          </div>

          <div className="submit-container">
            <button disabled={loading} onClick={handleClick} className="submit">
              Login
            </button>
            <div className="forgotDiv">
              <div className="link" onClick={handleForgot}>Forgot Password?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;