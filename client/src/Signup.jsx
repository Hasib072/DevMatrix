import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {    
    const [first_name, setFName] = useState('')
    const [last_name, setLName] = useState('')
    const [dob, setDob] = useState('')
    const [bio, setBio] = useState('Add you Bio Here.')
    const [website, setWebsite] = useState('https://www.google.com')
    const [linkedin_account, setLinkedin] = useState('https://www.linkedin.com')
    const [git_account, setGithub] = useState('https://www.github.com')
    const [user_name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", {first_name, last_name, user_name, email, password, dob, bio, website, linkedin_account, git_account})
        .then(result => {console.log(result)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="signup_body">
        <h1 className="signup_head">Sign up</h1>
        <div className="Form_body p-3 rounded w-25">
        <form className="signup_form" onSubmit={handleSubmit}>
          <label className="first_name" htmlFor="name">First Name</label><br/>
          <input className="first_input_signup" type="text" id="fname" autoComplete='off' onChange={(e) => setFName(e.target.value)} required />

          <label className="last_name" htmlFor="name">Last Name</label><br/>
          <input className="last_input_signup" type="text" id="lname" autoComplete='off'onChange={(e) => setLName(e.target.value)} required/>
          <label className="user_label_signup"  htmlFor="name">Username</label><br/>
          <input className="user_input_signup" type="text" id="name" autoComplete='off' onChange={(e) => setName(e.target.value)} required/>
          <br/>
          <label className="email_label_signup" htmlFor="email">E-mail</label><br/>  
          <input className="email_input" type="text" id="email" autoComplete='off' onChange={(e) => setEmail(e.target.value)} required/>
          <br/><br/>
          <label className="pass_label_signup" htmlFor="password">Password</label><br/><br/>
          <input className="pass_input_signup" type="password" id="password" autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>
          <br/>
          <button className="signup_but" type="submit">Sign up</button>
          <br/>
          <img className="line1_signup" src="https://i.ibb.co/BqcnZt5/minus.png" alt=""/>
          <img className="line2_signup" src="https://i.ibb.co/BqcnZt5/minus.png" alt=""/>x
          <p className="line_text_signup">Signup With</p><br/>
          <a href=""><img className="google_logo" src="https://i.ibb.co/NLpbPGm/social.png" alt=""/></a>
          <a href=""><img className="github_logo" src="https://i.ibb.co/K5Xx5sZ/github.png" alt=""/></a>
          <p className="last_line">Already have an account?<b> <Link className="signup" to="/login"><a className="signup">Log in</a></Link></b></p><br/><br/>
          
        </form>
        </div>
    </div>
  );
}

export default Signup;