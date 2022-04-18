import React from 'react'
import {Link} from "react-router-dom"
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "./Register.css";
function Register() {
  const navigate = useNavigate()
    const [pass,setPass]=useState("");
    const [repass,setRepass]=useState("");
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        mobile:'',
        password:'',
        repassword:''
      });

      const change=(e)=>{

        const {id,value}=e.target 
      
        setFormData({
            ...formData,
            [id]:value,
        })
        
      }

      const submit=(e)=>{
        e.preventDefault()
     if(formData.password !=formData.repassword){
         alert("password not matching");
         return;
     }
        axios.post('https://authentication-login.herokuapp.com/register',formData).then(({data})=>{
      console.log("data",data)
            localStorage.setItem('user_reg',JSON.stringify(data))
            
            alert("Registration Successful")
            //localStorage.setItem('token', 'true')
            
            setFormData({
                name:'',
              email:'',
              mobile:'',
              password:'',
              repassword:''
             
             })
            // window.location.reload()
            navigate("/")
        }).catch((err)=>{
        //localStorage.setItem("Err",JSON.stringify(err))
            alert(err+". "+"Email already exist or invalid credentials!!!")
            setFormData({
                name:'',
                email:'',
                mobile:'',
                password:'',
                repassword:''
                
             })
        })
      
      }
  return (
    <div id="outer_yy">
    
    
    <div id="loginpage_yy">
      <div className="div_yy">
        <h1 className="h1_yy">Create account</h1>
        <form id="register_form"  onSubmit={submit} action="">
        <p className="p_yy">Your name<span className="span_star">*</span></p>
        <input id="name" 
        type="text"
        value={formData.name}
        onChange={change}
        placeholder="Enter Name" />
        <p className="p_yy">Email<span className="span_star">*</span></p>
        <input id="email"
        type="email" 
        placeholder="Enter Email" 
        value={formData.email}
        onChange={change}/> 
        <p className="p_yy">Password<span className="span_star">*</span></p>
        <input type="password" 
        id="password" 
        placeholder="Enter Password"
        value={formData.password}
        onChange={change} />
        <p class="passp_yy">Password must be at least 8 characters*</p>
        <p className="pp_yy">Confirm password<span className="span_star">*</span></p>
        <input type="password" 
        id="repassword" 
        placeholder="Enter Password"
        value={formData.repassword}
        onChange={change} />
        <p className="p_yy">Mobile<span className="span_star">*</span></p>
        <input type="text"
         id="mobile" 
         placeholder="Enter Mobile Number" 
         value={formData.mobile}
        onChange={change}/>
        <button id="button_yy">Continue</button>
        </form>
        <Link to = {"/emailpass"}><p className="p_yy">Login now</p></Link>
      </div>
    </div>
    {/* <div id="desertcart_yy"></div> */}
    </div>
  )
}

export default Register


