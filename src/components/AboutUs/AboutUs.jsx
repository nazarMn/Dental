import React from "react";
import './AboutUs.css';



const AboutUs = () => {
    return (
      <div className="aboutUs">
        <div className="blue">
          <div className="re"></div>
        </div>
        <div className="aboutUsBox">
            <div className="aboutUsBoxLeft">
            <img src={doctor} alt="doctor" />
            </div>
            <div className="aboutUsBoxRight">
                <div className="text">
                    <h2>About Us</h2>
                    <h3>Best Dental Clinic <br /> You Can Trust.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Molesed erat tortor quis. Enim id lobortis massa egestas <br /> tortor ac ultrices semper. </p>

                </div>

            </div>

        </div>
     
      </div>
    )
}

export default AboutUs