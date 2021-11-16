import * as React from 'react';
import "./signup.css";
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';

export default function MediaCard() {
  return(
    <>
    <form className="formContainer" action="">
      <p className="topText">Log in to your Legitrading Account!</p>
      <hr className="ruler"/>
      <div>
      <Button className="google" variant="outline-dark"><i class="fab fa-google"></i>Sign in with Google</Button>
      </div>
      <div>
      <Button className="facebook" variant="outline-dark"><i class="fa-brands fa-facebook"></i>Sign in with Facebook</Button>
      </div>
      <div>
      <Button className="apple" variant="outline-dark"><i class="fa-brands fa-apple"></i>Sign in with Apple</Button>
      </div>
      <div>
      <input type="text" className="email" name="username" placeholder="&#xF0e0;                 Email" id="username"/>
      </div>
      <div>
      <input type="text" className="password" name="username" placeholder="&#xF023;               Password" id="username"/>
      </div>
      <div>
      <Button className="login" variant="outline-dark">Login</Button>
      </div>
      <a className="forgetPassword" href="#">or <strong>Forget Password</strong></a>
      <hr className="ruler"/>
      <a className="forgetPassword" href="#">Don't have an account? <strong>Sign Up!</strong></a>
    </form>
    </>
  );
}
