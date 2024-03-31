import React, { useState, useEffect, useRef } from "react";
import './MyProfile.css';
import { useLocation } from 'react-router-dom';
import NavigationBar from "./NavigationBar";


function MyProfile(){
    const location = useLocation();
    const { username } = location.state || {}; // Default to an empty object if state is undefined

    const [profileData, setProfileData] = useState({
        fname: '',
        lname: '',
        email: '' ,
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

        fetchProfileData();
    }, []); // Empty dependency array means this effect will only run once when the component mounts

    

    
    const [isEditMode, setIsEditMode] = useState(false);
    const [description, setDescription] = useState(profileData.description);
    const textareaRef = useRef(null); // Create a ref for the textarea

    console.log("Data ",profileData.description, "Desc",description)
    

    useEffect(() => {
        // Check if the textarea is in edit mode and if the ref is attached to an element
        if (isEditMode && textareaRef.current) {
            setDescription(profileData.description);
            textareaRef.current.focus(); // Focus the textarea
            textareaRef.current.select(); // Select all text inside the textarea
        }
    }, [isEditMode]); // Dependency array includes isEditMode to run the effect when it changes

    const handleEditClick = async () => {
        if (isEditMode) {
            // Assuming you have an endpoint to handle profile updates at /users/:username
            const updateEndpoint = `http://localhost:3001/updateuserbio/${profileData.username}`;
            try {
                const response = await fetch(updateEndpoint, {
                    method: 'PUT', // or 'PATCH' depending on your API design
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        bio: description // Send the updated description
                    }),
                });
                if (!response.ok) throw new Error('Failed to update bio');
                    const updatedUser = await response.json();
                    // Update local state to reflect the updated bio
                    setProfileData(prevState => ({
                        ...prevState,
                        description: updatedUser.bio, // Assuming the response includes the updated document
                }));
                setIsEditMode(false); // Exit edit mode
                console.log('Bio updated successfully');
            } catch (error) {
                console.error('Failed to update profile:', error);
            }
        } else {
            setIsEditMode(true); // Enter edit mode
            setDescription(profileData.description); // Reset description in case it was edited but not saved
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return(
        <div>
            <NavigationBar user={profileData} />

            <div id="info">
                <div>
                    <div id="profile_pic">
                    </div>
                    <h1 id="creaters_name">{profileData.fname} {profileData.lname}</h1>
                    <p id="username">{"@" +  profileData.username}</p>
                </div>
                <div>
                    <p id="about">About me!</p>
                    {isEditMode ? (
                        <textarea
                            ref={textareaRef} // Attach the ref to the textarea
                            id="aboutme_description_textbox"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    ) : (
                        <p id="aboutme_description">{profileData.description}</p>
                    )}
                    <button id="edit" onClick={handleEditClick}>
                        {isEditMode ? 'Save' : 'Edit Profile'}
                    </button>
                </div>
                <div id="line"></div>
                <div>
                    <p id="social">Socials</p>
                    <a href={profileData.personalwebsite} target="_blank"><button id="website_button">Website</button></a>
                    <a href={profileData.git_account} target="_blank"><button id="github_button">Github</button></a>
                    <a href={profileData.linkedin_account} target="_blank"><button id="linkedin_button">Linkedin</button></a>
                </div>
                <div id="sec">
                    <button id="public">Public</button>
                    <button id="variation">Variation</button>
                    <button id="drafts">Drafts</button>
                    <button id="fav">Favorites</button>
                </div>
        </div>

        </div>
    )
}

export default MyProfile;