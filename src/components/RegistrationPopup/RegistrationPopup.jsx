import React from "react";
import './RegistrationPopup.css'

const RegistrationPopup = () => {
    return (
        <div className="registrationPopup">\
            <h1>Registration</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <button>Register</button>
            </form>
         
        </div>
    )
}

export default RegistrationPopup