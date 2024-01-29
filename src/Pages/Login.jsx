import React from "react";
import "./Styles/LoginSignup.css"; 
import loginImage from "../images/login.png"; 
import Navbar from "./Components/Navbar";
function Login() {
  return (
    <>
    
      <Navbar/>
      <section className="form-Card" style={{marginTop: "120px"}}>
        <div className="login-container">
          <div className="login-image">
            <img src={loginImage} height={700} width={700} alt="Login" />
          </div>

          <div className="login-form">
            <h1>LOG IN</h1>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div>
                <button id="btn-submit" type="submit">
                  LOG IN
                </button>
              </div>
            </form>
            <div className="forgot-password">
              <a href="/forgotpassword">Forgot Password?</a>
            </div>
            <div className="login-text">
              <span>
                Don't have an account ?<a href="/signup">Sign up</a>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
