import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import TopPicks from "./TopPicks";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import axios from 'axios';


function Home(){
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
    const [loadingDelayPassed, setLoadingDelayPassed] = useState(false);
    const [error, setError] = useState(null);
    const [userElements, setUserElements] = useState([]);
    const [hasElement, setHasElement] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
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
                setTimeout(() => {
                    setIsLoading(false);
                    setLoadingDelayPassed(true);
                }, 5000);
            }
        };

        if (username) {
            fetchProfileData();
        } else {
            setIsLoading(false);
        }
    }, [username]);
    
    console.log(username);

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

    return(
        <div>
          <NavigationBar user={profileData}/>
          
          <HeroSection/>
          <TopPicks snippets={userElements} />
          <AboutUs/>
          <Footer/>
        </div>
    )
}

export default Home;