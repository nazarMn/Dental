// import React from "react";
// import './RegistrationPopup.css'

// const RegistrationPopup = () => {
//     return (
//         <div className="registrationPopup">\
//             <h1>Registration</h1>
//             <form>
//                 <input type="text" placeholder="Name" />
//                 <input type="text" placeholder="Email" />
//                 <input type="text" placeholder="Password" />
//                 <input type="text" placeholder="Confirm Password" />
//                 <button>Register</button>
//             </form>
            
         
//         </div>
//     )
// }

// export default RegistrationPopup





import React from "react";
import './RegistrationPopup.css';

const RegistrationPopup = () => {
    return (
        <div className="registrationPopup">
            <div className="popupContainer">
                <h1>Register</h1>
                <form>
                    <div className="inputGroup">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="inputGroup">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="inputGroup">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="inputGroup">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <button className="registerButton">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPopup;
