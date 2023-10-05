import "./navbar.css"
import {  useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

    const handleRegister = () => {
            navigate("/register")
        }
        
    const handleClick = () => {  
          navigate("/login")
        };
        
        
        return (
          <div className="navbar">
            <div className="navContainer">
              <span className="logo">CheckInnJoy</span>
              <div className="navItems">
                <button className="navButton" onClick={handleRegister}>Register</button>
                <button className="navButton" onClick={handleClick}>Login</button>
              </div>
            </div>
          </div>
  )
 
}

export default Navbar