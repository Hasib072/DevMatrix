import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './Login.css';


function Login() {    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Successfully loggedin " + email){
                navigate("/home")
            }else{
                navigate("/register")
                alert("You are not registered to this service")

            }
       
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="login_body">
        <h1 className="login_head">Login</h1>
        <div className="Form_body p-3 rounded w-25">
            <form className="login_form" onSubmit={handleSubmit}>
                <label className="user_label"  htmlFor="name">Username or E-mail</label><br/>
                <input className="user_input" type="text" id="name" autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <label className="pass_label" htmlFor="password">Password</label><br/>  
                <input className="pass_input" type="password" id="password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} />
                <br/><br/>
                <a className="FP" href="">Forgot Password?</a>
                <br/>
                <a href=""><button onClick="" className="login_but">Sign in</button></a>
                <br/>
                <img className="line1_login" src="https://i.ibb.co/BqcnZt5/minus.png" alt=""/>
                <img className="line2_login" src="https://i.ibb.co/BqcnZt5/minus.png" alt=""/>
                <p className="line_text">Login With</p>
                <a href=""><img className="google_logo_login" src="https://i.ibb.co/NLpbPGm/social.png" alt=""/></a>
                <a href=""><img className="github_logo_login" src="https://i.ibb.co/K5Xx5sZ/github.png" alt=""/></a>
                <p className="last_line_login">Don't have an account? <b><Link  to="/register"><a className="login">Sign up</a></Link></b></p>
            </form>
        </div>
        </div>
  );
}

export default Login;