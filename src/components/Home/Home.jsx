import React from "react";
import './Home.css';




const Home = () => {
    return (
      <div className="home">
        <div className="homeLeft">
            <h2>
            We Care About Your <br /> Dental Health.
            </h2>
            <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br />healthy mouth,  free of infections, injuries and other problems .</p>
            <div className="homeButton">
                <button className="appoinmentBtn">Appoinment</button>
                <button className="playBtn">  </button>
                <h2>Watch Video</h2>


            </div>
        </div>
        <div className="homeRight">
        <img src="" alt="young" />
          <div className="background">

          </div>
        </div>
      </div>
    )
}

export default Home