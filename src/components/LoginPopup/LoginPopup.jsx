import React, { useState } from "react";
import './LoginPopup.css';

const LoginPopup = ({ closePopup }) => {
    
   
    return (
        <div className="loginPopup">
            <div className="popupContainer">
                <button className="closeButton" onClick={closePopup}>×</button>
                <h1>Login</h1>
                <form>
                    <div className="inputGroup">
                        <input type="text" placeholder="Name and email" required />
                        
                    </div>
                    <div className="inputGroup">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button className="registerButton">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;
