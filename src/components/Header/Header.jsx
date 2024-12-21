import React, { useState, useEffect } from "react";
import './Header.css';
import RegistrationPopup from "../RegistrationPopup/RegistrationPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import SettingsPopup from "../SettingsPopup/SettingsPopup";
import people3 from '/people 3.png';

const Header = () => {
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("userId");
        setIsDropdownOpen(false);
    };

    const closeAllPopups = () => {
        setIsRegistrationPopupOpen(false);
        setIsLoginPopupOpen(false);
        setIsSettingsPopupOpen(false);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (userId) {
                    const response = await fetch(`/user/${userId}`);
                    if (!response.ok) throw new Error("Failed to fetch user data");
                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleLoginSuccess = (loggedInUser) => {
        setUser(loggedInUser);
        localStorage.setItem("userId", loggedInUser._id);
        closeAllPopups();
    };

    const handleSaveSettings = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem("userId", updatedUser._id);
    };

    return (
        <div className="header">
            <div className="logo">
                <h2>Dental</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div className="headerBtn">
                {user ? (
                    <div className="userInfo">
                        <img
                            src={user.photo ? `/uploads/${user.photo}` : people3}
                            alt="Profile"
                            className="profilePic"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                        />
                        <h3>{user.name}</h3>
                        {isDropdownOpen && (
                            <div className="dropdown">
                                <button
                                    className="settingsBtn"
                                    onClick={() => {
                                        setIsSettingsPopupOpen(true);
                                        setIsDropdownOpen(false); 
                                    }}
                                >
                                    Settings
                                </button>
                                <button className="logoutBtn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button className="loginBtn" onClick={() => setIsLoginPopupOpen(true)}>Log in</button>
                        <button className="signupBtn" onClick={() => setIsRegistrationPopupOpen(true)}>Sign up</button>
                    </>
                )}
            </div>
            {isRegistrationPopupOpen && (
                <RegistrationPopup closePopup={closeAllPopups} />
            )}
            {isLoginPopupOpen && (
                <LoginPopup
                    closePopup={closeAllPopups}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
            {isSettingsPopupOpen && user && (
                <SettingsPopup
                    user={user}
                    closePopup={closeAllPopups}
                    onSaveSettings={handleSaveSettings}
                />
            )}
        </div>
    );
};

export default Header;
