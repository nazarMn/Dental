import './App.css'
import  Header  from './components/Header/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlay);
import YoungImg from '/young.png'
import Doctor from '/doctor.png'

function App() {

  return (
    <div className='wrap'>
     

    <Header />

 
    <div className="home">
    <div className="background">

</div>
        <div className="homeLeft">
            <h2>
            We Care About Your <br /> Dental Health.
            </h2>
            <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br />healthy mouth,  free of infections, injuries and other problems .</p>
            <div className="homeButton">
                <button className="appoinmentBtn">Appoinment</button>
                <button className="playBtn">  <FontAwesomeIcon icon={faPlay} size="2xl"/></button>
                <h2>Watch Video</h2>


            </div>
        </div>
        <div className="homeRight">
        <img src={YoungImg} alt="young" />
        
        </div>
      </div>




      <div className="aboutUs">
       
        <div className="aboutUsBox">
            <div className="aboutUsBoxLeft">
            <img src={Doctor} alt="doctor" />
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

  

    </div>
  )
}

export default App
