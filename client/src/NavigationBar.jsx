import React from "react";
import logo from './assets/component/DevMatrix_logo_Nav.png'
import './NavigationBar.css';


function NavigationBar({user}){
    return(
        <div>
            <a href=""><img id="logo" src={logo} alt="logo"/></a>
            <button id="create">CREATE</button>
            <div id="head">
                <div>
                    <a href="#trending">Trending</a>
                    <a href="#Discover">Discover</a>
                    <a href="#About">About</a>
                </div>
                <div>
                    <div id="dp"></div>
                    <div>
                        <p id="nav-name">{user.fname} {user.lname}</p>
                        <p id="un">{user.username}</p>    
                    </div>
                </div>
                </div>
        </div>
    )
}

export default NavigationBar;