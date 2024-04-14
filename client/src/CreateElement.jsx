import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./CreateElement.css"


function CreateElement() {    
    const [user_name, setName] = useState()
    const [element_name, setElementName] = useState()
    const [element_html, setElementHtml] = useState('Empty')
    const [element_css, setElementCss] = useState('')
    const [background, setBackground] = useState('#2b2b2b')
    const [background2, setBackground2] = useState('#d9d9d9')
    const [element_desc, setElementDesc] = useState('')
    const [element_tags, setElementTags] = useState('')
    const [is_puplic, setIsPublic] = useState(false)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(is_puplic)
        axios.post("http://localhost:3001/create", {user_name, element_name, element_html, element_css, element_tags, is_puplic, element_desc, background, background2})
        .then(result => {console.log(result)
        navigate("/myprofile", { state: { username: user_name } })
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="signup_body">
        
        <div className="Form_body p-3 rounded w-25">
        <form className="signup_form" onSubmit={handleSubmit}>
          <br/>
          <input className="user_input" type="text" id="name" placeholder="Username" autoComplete='off' onChange={(e) => setName(e.target.value)} required/>
          <br/>
          <br/>
          <input className="email_input" type="text" id="email" placeholder="Title" autoComplete='off' onChange={(e) => setElementName(e.target.value)} required/>
          <br/><br/>
  
          
          <input className="email_input" type="text" id="email" placeholder="HTML CODE" autoComplete='off' onChange={(e) => setElementHtml(e.target.value)}/>
          <br/><br/>
          <input className="email_input" type="text" id="email" placeholder="CSS CODE" autoComplete='off' onChange={(e) => setElementCss(e.target.value)}/>
          <br/><br/>
          <input className="Color_input" type="color" id="email" value={background} onChange={(e) => setBackground(e.target.value)}/>
          <input className="Color_input" type="color" id="email" value={background2} onChange={(e) => setBackground2(e.target.value)}/>

          <br/><br/>
          <div class="switch-holder">
    <div class="switch-label">
        <span>Public</span>
    </div>
    <div class="switch-toggle">
        <input type="checkbox" id="bluetooth" onChange={(e) => setIsPublic(e.target.checked)}/>
        <label for="bluetooth"></label>
    </div>
</div>
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