import React from "react";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <section className="registration-section">
        <div className="registration-card">
            <form>
            <h3 className="registration-title">Register</h3>
              <div className="registration-form-group">
                <div className="registration-form-group-inner">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="registration-input"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="registration-form-group">
                <div className="registration-form-group-inner">
                  <input
                    type="text"
                    className="registration-input"
                    id="email"
                    name="email"
                    pattern="^[a-zA-Z0-9._%+-]+@.*somaiya\.edu$"
                    title="Invalid email format"
                    placeholder="Email Id"
                  />
                </div>
              </div>

              <div className="registration-form-group">
                <div className="registration-form-group-inner">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="registration-input"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="registration-form-group">
                <div className="registration-form-group-inner">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    title="Password must be at least 8 characters long"
                    className="registration-input"
                    placeholder="Password"
                  />
                </div>
                <div className="registration-form-group-inner">
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    className="registration-input"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="registration-button">
                <input
                  className="btn btn-primary btn-md"
                  type="submit"
                  value="Submit"
                />
              </div>
              </div>
            </form>

        </div>
      </section>
    </div>
  );
};

export default Register;
