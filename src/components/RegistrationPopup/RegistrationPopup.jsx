import React, { useState } from "react";
import './RegistrationPopup.css';

const RegistrationPopup =  ({ closePopup }) => {

    return (
        <div className="registrationPopup">
            <div className="popupContainer">
                <button className="closeButton" onClick={closePopup}>×</button>
                <h1>Register</h1>
                <form>
                    <div className="inputGroup">
                        <input type="text" placeholder="Name" required />
                        <input type="text" placeholder="Surname" />
                    </div>

                    <div className="inputGroup">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="inputGroup">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button className="registerButton">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPopup;
