import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function CreateElement() {    
    const [user_name, setName] = useState()
    const [element_name, setElementName] = useState()
    const [element_html, setElementHtml] = useState('Empty')
    const [element_css, setElementCss] = useState('')
    const [element_desc, setElementDesc] = useState('')
    const [element_tags, setElementTags] = useState('')
    const [is_puplic, setElementPublic] = useState('')

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/create", {user_name, element_name, element_html, element_css, element_tags})
        .then(result => {console.log(result)
        // navigate("/login")
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="signup_body">
        
        <div className="Form_body p-3 rounded w-25">
        <form className="signup_form" onSubmit={handleSubmit}>
          <label className="user_label_signup"  htmlFor="name">Username</label><br/>
          <input className="user_input" type="text" id="name" autoComplete='off' onChange={(e) => setName(e.target.value)} required/>
          <br/>
          <label className="email_label_signup" htmlFor="email">Title</label><br/>  
          <input className="email_input" type="text" id="email" autoComplete='off' onChange={(e) => setElementName(e.target.value)} required/>
          <br/><br/>
  
          <label className="email_label_signup" htmlFor="email">HTML</label><br/>  
          <input className="email_input" type="text" id="email" autoComplete='off' onChange={(e) => setElementHtml(e.target.value)}/>
          
          <br/>
          <br/><br/>
          <br/>
          <button className="signup_but" type="submit">Upload</button>
          <br/>
        </form>
        </div>
    </div>
  );
}

export default CreateElement;