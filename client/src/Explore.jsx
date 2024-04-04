import React, { useState, useEffect, useRef } from "react";
import './Explore.css';
import { useLocation } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import ContainerGrid from "./containergrid";
import axios from 'axios';


  

function Explore(){
    const location = useLocation();
    const { username } = location.state || {}; // Fallback to an empty object if state is undefined

    const [profileData, setProfileData] = useState({
        fname: '',
        lname: '',
        email: '',
        username: username,
        description: '',
        personalwebsite: '',
        git_account: '',
        linkedin_account: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                // Fetch data from your API endpoint
                const response = await fetch(`http://localhost:3001/users/${username}`);
                if (!response.ok) {
                    throw new Error('Could not fetch profile data!');
                }
                const data = await response.json();
                setProfileData({
                    fname: data.first_name,
                    lname: data.last_name,
                    username: data.user_name,
                    description: data.bio,
                    personalwebsite: data.website,
                    git_account: data.git_account,
                    linkedin_account: data.linkedin_account
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (username) { // Only fetch data if username exists
            fetchProfileData();
        } else {
            setIsLoading(false); // If no username, no loading is necessary
        }
    }, [username]); // Depend on username to re-fetch if it changes

    const [userElements, setUserElements] = useState([]);
    const [hasElement, setHasElement] = useState(true);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/elements`);
                setUserElements(response.data);
                // console.log(userElements);
            } catch (error) {
                console.error('Error fetching elements:', error);
            }
        };

        fetchElements();
    }, [username]);

    useEffect(() => {
        if (userElements && userElements.length > 0) {
          setHasElement(true);
        } else {
          setHasElement(false);
        }
      }, [userElements]);

    return(
        <div>
            <NavigationBar user={profileData}/>

            <div className="search">
                <input type="text" placeholder="Element, tags, users...."/>
                <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                </span>
                <div className="wline"></div>
                <button id="theme">Mixed</button>
                <button id="sort">Recent</button>
                <div id="sep"></div>
            </div>
            <div className="Element_container">
                {hasElement ? (<ContainerGrid snippets={userElements}/>) : (
                    <div>
                        <div className="loader">
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        </div>
                        <p className="no_element"> No Elements to Show </p>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Explore;