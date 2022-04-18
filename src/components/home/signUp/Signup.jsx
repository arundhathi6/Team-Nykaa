import React from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div id="signup_div_aaa">
         
    <div>
    <p className="sign_text">Sign in</p> 
    <p>To quikly find your favorite items, saved addresses and payments</p>
    <hr></hr>
    <p>Register and earn 2000 reward points</p>
    <div id="social_div_aaa">
      <img src="https://play-lh.googleusercontent.com/IQY-Wdrml4ObU2Ha2_RdYmuJFMZ7AJUytlKgYT2pukFTleCkg1YyabeK0WBCCCiBslQ"/>
       
    </div>
    <Link to={"/emailpass"}><button id="login_button_aaa">LOGIN TO ACCOUNT</button></Link>
   
      <button id="google_aaa"><img src="https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt=""/>
            <p id="google">GOOGLE</p></button>
            

    
    <p>By continuing you agree that you have read and accept on T&Cs and Privacy Policy</p>
    
    </div>
</div>
  )
}

export default Signup