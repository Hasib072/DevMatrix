import React from "react";
import logo from './assets/component/DevMatrix_logo_Nav.png'
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios'
import './NavigationBar.css';


function NavigationBar({user}){

    let navigate = useNavigate();
    const goToMyProfile = () => {
        navigate("/myprofile", { state: { username: user.username } });
      };

    console.log("User = " + user.username);
    return(
        <div>
            <a href=""><img id="logo" src={logo} alt="logo"/></a>
            {user.username ? (
              <Link to="/create"><button id="create">CREATE</button></Link>
            ) : (
              <Link to="/login"><button id="login">LOGIN</button></Link>
            )}
            <div id="head">
                <div>
                {user.username ? (
                  <>
                    <Link to="/explore" state={{ username: user.username }}>Trending</Link>
                    <Link to="/explore" state={{ username: user.username }}>Discover</Link>
                    <Link to="/home" state={{ username: user.username }}>About</Link>
                  </>
                ) : (
                  <>
                    <Link to="/explore">Trending</Link>
                    <Link to="/explore">Discover</Link>
                    <Link to="/home">About</Link>
                  </>
                )}
                </div>
                {user.username && (
                  <div>
                    <div onClick={goToMyProfile} id="dp"></div>
                    <div>
                      <p onClick={goToMyProfile} id="nav-name">{user.fname} {user.lname}</p>
                      <p onClick={goToMyProfile} id="un">{"@" + user.username}</p>
                    </div>
                  </div>
                )}
                </div>
        </div>
    )
}

export default NavigationBar;