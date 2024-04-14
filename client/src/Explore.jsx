import React, { useState, useEffect } from "react";
import './Explore.css';
import { useLocation } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import ContainerGrid from "./containergrid";
import axios from 'axios';

function Explore() {
    const location = useLocation();
    const { username } = location.state || {}; // Fallback to an empty object if state is undefined
    if (!username) {
        console.log("No user");
        // setTimeout(() => {
        //     setIsLoading(false);
        //     setLoadingDelayPassed(true);
        // }, 5000);
    }
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
    const [loadingDelayPassed, setLoadingDelayPassed] = useState(false);
    const [error, setError] = useState(null);
    const [userElements, setUserElements] = useState([]);
    const [hasElement, setHasElement] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            // setIsLoading(true);
            try {
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
                // Ensure that the loader shows for at least 2 seconds
                // setTimeout(() => {
                //     setIsLoading(false);
                //     setLoadingDelayPassed(true);
                // }, 5000);
                console.log("Fetchcth Profile");
            }
        };

        if (username) {
            fetchProfileData();
        } else {
            setIsLoading(false);
        }
    }, [username]);

    useEffect(() => {
        const fetchElements = async () => {
            setIsLoading(true);
            
            try {
                const response = await axios.get(`http://localhost:3001/elements`);
                setUserElements(response.data);
            } catch (error) {
                console.error('Error fetching elements:', error);
            } finally {
                // Ensure that the loader shows for at least 2 seconds
                setTimeout(() => {
                    setIsLoading(false);
                    setLoadingDelayPassed(true);
                }, 5000);
                console.log("Fetchcth Elements");
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

    return (
        <div>
            <NavigationBar user={profileData} />

            <div className="search">
                <input type="text" placeholder="Element, tags, users...." />
                <span className="input-group-addon">
                    <i className="fa fa-search"></i>
                </span>
                <div className="wline"></div>
                <button id="theme">Mixed</button>
                <button id="sort">Recent</button>
                <div id="sep"></div>
            </div>

            <div className="Element_container">
                {isLoading || !loadingDelayPassed ? (
                    
                    <div className="loader">
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        <p className="Loading_Text">Loading . . .</p>
                    </div>
                ) : hasElement ? (
                    <ContainerGrid snippets={userElements} />
                ) : (
                    <p className="no_element">No Elements to Show</p>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Explore;
