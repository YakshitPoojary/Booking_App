import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    // Navigate to the home page when the logo is clicked
    navigate("/");
  };

  return (
    <div className="frame">
      <a href="/" onClick={handleLogoClick} className="logo-link">
        <div className="div">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper">Karo</div>
          </div>
          <div className="text-wrapper-2">Book</div>
        </div>
      </a>

      <div className="div-2">
        <button className="div-wrapper" onClick={handleRegister}>
          <div className="text-wrapper-4">Sign Up</div>
        </button>
        <button className="div-wrapper" onClick={handleClick}>
          <div className="text-wrapper-4">Login</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
