import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./Emailpass.css";

function Emailpass() {
  const navigate = useNavigate()  
  const [formLogin, setFormlogin]=useState({
    email:'',
    password:'',
  })

  const change=(e)=>{
    const {id,value}=e.target 
  
    setFormlogin({
        ...formLogin,
        [id]:value,
    })
    
  }

    const submit=(e)=>{
        e.preventDefault()
   
        axios.post('https://auth-nyka-clone.onrender.com/login',formLogin).then(({data})=>{
      console.log("data",data)
            localStorage.setItem('user_log',JSON.stringify(data))
            
            alert("Login Successful")
          
            setFormlogin({
              email:'',
              password:'',
        
             })
            navigate("/emailpass")
            //window.location.reload()
        }).catch((err)=>{
        //localStorage.setItem("Err",JSON.stringify(err))
            alert(err+". "+"invalid credentials!!!")
            setFormlogin({
                email:'',
                password:'',
          
               })
        })
      
      }
  return (
    <div id="outer_bzzz">

<div className="div_bzzz" id="loginpage_bzzz">
  <div className="div_bzzz" class="signdiv_bzzz">
    <h1 id="h1_bzzz">Sign-In</h1>
    <form onSubmit={submit} id="log_form">
    <p className="p_bzzz">Enter Registered Email</p>
    <input id="email"
        type="email" 
        placeholder="EMAIL" 
        value={formLogin.email}
        onChange={change} />
    <p className="p_bzzz">Enter your Password</p>
    <input id="password"
        type="password" 
        placeholder="PASSWORD" 
        value={formLogin.password}
        onChange={change} />
 <button className="button_bzzz">LOGIN</button><br/>
    </form>
    <label>New to Nykaa fashion?<Link to={"/register"}><p>Create new account</p></Link></label>
  </div>
</div>
{/* <div id="desertcart_zzz"></div> */}
</div>
  )
}

export default Emailpass


