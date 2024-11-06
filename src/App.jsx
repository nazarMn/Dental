import './App.css'
import  Header  from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlay);
import Tooth1 from './assets/tooth 1.svg'
import YoungImg from '/young.png'
import Doctor from '/doctor.png'
import Money1 from './assets/money 1.svg'
import tooth2 from './assets/tooth 2.svg'
import tooth3 from './assets/tooth 3.svg'
import tooth4 from './assets/tooth 4.svg'
import ServicesCard from './components/ServicesCard/ServicesCard'
import doctor1 from '/doctor 1.png'
import doctor2 from '/doctor 2.png'
import doctor3 from '/doctor 3.png'
import ProfessionalsCard from './components/ProfessionalsCard/ProfessionalsCard'


function App() {



  const servicesData = [
    { imgSrc: tooth2, title: "Teeth Checkup" },
    { imgSrc: tooth3, title: "Dental Crown" },
    { imgSrc: tooth4, title: "Teeth Implants" }
];
 const ProfessionalsData = [
    { imgSrc: doctor1, title: "Dr.Rana Roy", specialist:"Dental Crown" },
    { imgSrc: doctor2, title: "Dr.John Roy", specialist:"Teeth Checkup" },
    { imgSrc: doctor3, title: "Dr.Michel Roy", specialist:"Teeth Implants" }
];
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
                <div className="aboutUsText">
                    <h2>About Us</h2>
                    <h3>Best Dental Clinic <br /> You Can Trust.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Molesed erat tortor quis. Enim id lobortis massa egestas <br /> tortor ac ultrices semper. </p>

                </div>
                <div className="aboutUsInfo">
                  <div className="aboutUsInfoTop">
                    <button> <img src={Tooth1} alt="Tooth1" /></button>
                    <div className="aboutUsInfoText">
                      <h2>Complete Dental Care</h2>
                      <p>Lorem ipsum dolor sit amet, consect <br /> etur adipiscing elit cursus.  </p>
                    </div>
                  </div>
                  <div className="aboutUsInfoBottom">
                    <button> <img src={Money1} alt="Money1" /></button>
                  <div className="aboutUsInfoText">
                      <h2>Affordable Price</h2>
                      <p>Lorem ipsum dolor sit amet, consect <br /> etur adipiscing elit cursus.    </p>
                    </div>
                  </div>

                </div>

            </div>

        </div>
     
      </div>


      <div className="services">
        <div className="servicesTop">
          <h2>Our Dental Services</h2>
          <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> healthy mouth, free of infections, injuries and other problems with</p>
        </div>
        <div className="servicesBottom">
        {servicesData.map((props, index) => (
        <ServicesCard 
            key={index} 
            imgSrc={props.imgSrc} 
            title={props.title} 
        />
    ))}
          
        </div>
      </div>


      <div className="professionals">


        <div className="professionalsTop">
          <h3>Our Doctors</h3>
          <h2>Team Of Professionals</h2>
          <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> healthy mouth free of infections, injuries and other problems with.</p>
      </div>
      <div className="professionalsBottom">
      {ProfessionalsData .map((props, index) => (
        <ProfessionalsCard 
            key={index} 
            imgSrc={props.imgSrc} 
            title={props.title} 
            specialist = {props.specialist}
        />
    ))}
      </div>
      </div>
      

  

    </div>
  )
}

export default App
