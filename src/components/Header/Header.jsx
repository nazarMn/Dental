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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Випадаюча шторка
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        setIsDropdownOpen(false); // Закрити випадаючу шторку після виходу
    };

    const closeAllPopups = () => {
        setIsRegistrationPopupOpen(false);
        setIsLoginPopupOpen(false);
        setIsSettingsPopupOpen(false);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    const handleLoginSuccess = (loggedInUser) => {
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        closeAllPopups();
    };

    const handleSaveSettings = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
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
                            src={user.photo || people3}
                            alt="Profile"
                            className="profilePic"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Відкрити/закрити шторку
                        />
                        <h3>{user.name}</h3>
                        {isDropdownOpen && (
                            <div className="dropdown">
                                <button
                                    className="settingsBtn"
                                    onClick={() => {
                                        setIsSettingsPopupOpen(true);
                                        setIsDropdownOpen(false); // Закрити шторку
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
