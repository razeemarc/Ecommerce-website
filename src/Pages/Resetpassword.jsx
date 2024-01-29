
import React from 'react';
import './Styles/LoginSignup.css'; // Import your CSS file
import signupImage from '../images/signup.png'; // Import your login image
import Navbar from './Components/Navbar';
function Resetpassword() {
  return (
    <>
    
      <Navbar/>
    <section className='form-Card' style={{marginTop: "120px"}}>
      <div className="login-container">
        <div className="login-image">
          <img src={signupImage} height={700} width={700} alt="Login" />
        </div>


        <div className="login-form">
          <h1>WELCOME !</h1>
          <form>
            <div className="form-group">
            <label>Name:</label>
              <input type="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" placeholder="Create your password" />
            </div>
            <div >
            <button id='btn-submit' type="submit">SIGN UP</button>
            </div>
          </form>
          
          <div className='login-text'>
          <span>Already have an account ?<a href='/login'>Log in</a> </span> </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Resetpassword;
