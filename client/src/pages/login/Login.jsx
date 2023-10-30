import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleForgot= () =>{
    navigate("/forgot");
  }

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if(credentials.email == undefined || credentials.password == undefined){
      setErr("Error, please fill each field");
    }
    else{
      dispatch({ type: "LOGIN_START" });
      try {
        console.log(credentials.email, credentials.password)
        const res = await axios.post("https://bookkaro.onrender.com/auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        setErr(err.response.data.message);
        //window.location.reload(false);
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