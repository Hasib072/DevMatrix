import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './ElementPreview.css';
import NavigationBar from './NavigationBar';

const ElementPreview = () => {

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

  return (
    <div>
      <NavigationBar user={profileData} />
    </div>
  );
};

export default ElementPreview;
