import React from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div id="signup_div_baaa">
         
    <div>
    <p className="sign_text_baaa p_baaa">Sign in</p> 
    <p className="p_baaa">To quikly find your favorite items, saved addresses and payments</p>
    <hr></hr>
    <p className="p_baaa">Register and earn 2000 reward points</p>
    <div id="social_div_baaa">
      <img src="https://cdn3.invitereferrals.com/blog/wp-content/uploads/2019/08/10061231/8-1.png"/>
       
    </div>
    <Link to={"/emailpass"}><button id="login_button_baaa">LOGIN TO ACCOUNT</button></Link>
   
      <button id="google_baaa"><img src="https://www.raqnbeauty.com/wp-content/uploads/2020/06/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt=""/>
            <p>GOOGLE</p></button>
            

    
    <p className="p_baaa">By continuing you agree that you have read and accept on T&Cs and Privacy Policy</p>
    
    </div>
</div>
  )
}

export default Signup