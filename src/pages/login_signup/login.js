import * as React from 'react';
import "./login.css";
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';

export default function MediaCard() {
  return(
    <>
    <form className="formContainer" action="">
      <p className="topText">Log in to your Legitrading Account!</p>
      <hr className="ruler"/>
      <div>
      <input type="text" className="fullname" name="username" placeholder="&#xF007;     Full Name" id="username"/>
      </div>
      <div>
      <input type="text" className="email" name="username" placeholder="&#xF0e0;    Email" id="username"/>
      </div>
      <div>
      <input type="text" className="password" name="username" placeholder="&#xF023;     Password" id="username"/>
      </div>
      <div>
      <Button className="login" variant="outline-dark">Login</Button>
      </div>
      <a className="forgetPassword" href="#">By signing up, you agree to our Terms of Use and Privacy Policy.</a>
      <hr className="ruler"/>
      <a className="login_account" href="#">Already have an account? <strong >Log In!</strong></a>
    </form>
    </>
  );
}
