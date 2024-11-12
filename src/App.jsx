import { useEffect, useRef, useState } from "react";
import './App.css';
// import './Responsive.css';
import Header from './components/Header/Header';
import EmailSend from "./components/EmailSend/EmailSend";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlay);

import Tooth1 from './assets/tooth 1.svg';
import YoungImg from '/young.png';
import Doctor from '/doctor.png';
import Money1 from './assets/money 1.svg';
import tooth2 from './assets/tooth 2.svg';
import tooth3 from './assets/tooth 3.svg';
import tooth4 from './assets/tooth 4.svg';
import ServicesCard from './components/ServicesCard/ServicesCard';
import doctor1 from '/doctor 1.png';
import doctor2 from '/doctor 2.png';
import doctor3 from '/doctor 3.png';
import doctor4 from '/doctor 4.png';
import doctor5 from './assets/doctor 5.svg';
import people1 from '/people 1.png';
import people2 from '/people 2.png';
import people3 from '/people 3.png';
import ProfessionalsCard from './components/ProfessionalsCard/ProfessionalsCard';
import ReviewsCard from './components/ReviewsCard/ReviewsCard';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    details: '',
  });

  const servicesData = [
    { imgSrc: tooth2, title: "Teeth Checkup" },
    { imgSrc: tooth3, title: "Dental Crown" },
    { imgSrc: tooth4, title: "Teeth Implants" },
  ];

  const professionalsData = [
    { imgSrc: doctor1, title: "Dr.Rana Roy", specialist: "Dental Crown" },
    { imgSrc: doctor2, title: "Dr.John Roy", specialist: "Teeth Checkup" },
    { imgSrc: doctor3, title: "Dr.Michel Roy", specialist: "Teeth Implants" },
  ];

  const reviewsData = [
    {  imgSrc:people1, name: "Andrew Smith ", text: "Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit ultricies sit sit dolo", rating:4},
    {  imgSrc:people2, name: "Andrew Smith ", text: "Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit ultricies sit sit dolo", rating:5},
    {  imgSrc:people3, name: "Andrew Smith ", text: "Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit ultricies sit sit dolo", rating:5}
  ];

  const boxesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      boxesRef.current.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxPosition < windowHeight - 100) {
          box.classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='wrap'>
      <Header />

      <div className="home">
        <div className="background"></div>
        <div className="homeLeft">
          <h2>We Care About Your <br /> Dental Health.</h2>
          <p>Dental or oral health is concerned with your teeth, gums and mouth. <br />Healthy mouth, free of infections, injuries and other problems.</p>
          <div className="homeButton">
            <button className="appoinmentBtn">Appointment</button>
            <button className="playBtn">
              <FontAwesomeIcon icon={faPlay} size="2xl" />
            </button>
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
                <button><img src={Tooth1} alt="Tooth1" /></button>
                <div className="aboutUsInfoText">
                  <h2>Complete Dental Care</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus.</p>
                </div>
              </div>
              <div className="aboutUsInfoBottom">
                <button><img src={Money1} alt="Money1" /></button>
                <div className="aboutUsInfoText">
                  <h2>Affordable Price</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="servicesTop">
          <h2>Our Dental Services</h2>
          <p>
            Dental or oral health is concerned with your teeth, gums, and mouth.
            <br />
            Healthy mouth, free of infections, injuries, and other problems.
          </p>
        </div>
        <div className="servicesBottom">
          {servicesData.map((service, index) => (
            <ServicesCard key={index} imgSrc={service.imgSrc} title={service.title} />
          ))}
        </div>
      </div>

      <div className="professionals">
        <div className="professionalsTop">
          <h3>Our Doctors</h3>
          <h2>Team Of Professionals</h2>
          <p>
            Dental or oral health is concerned with your teeth, gums, and mouth.
            <br />
            Healthy mouth free of infections, injuries, and other problems.
          </p>
        </div>
        <div className="professionalsBottom">
          {professionalsData.map((professional, index) => (
            <ProfessionalsCard
              key={index}
              imgSrc={professional.imgSrc}
              title={professional.title}
              specialist={professional.specialist}
            />
          ))}
        </div>
      </div>

      <div className="informationAboutUs">
        {[
          { count: 20, label: "Qualified Staff" },
          { count: 120, label: "Courses Published" },
          { count: 550, label: "Happy Students" },
          { count: 20, label: "Years of Experience" },
        ].map((info, index) => (
          <div key={index} ref={(el) => (boxesRef.current[index] = el)} className="informationAboutUsBox">
            <div className="informationAboutUsBoxTop">
              <h2>{info.count}</h2>
            </div>
            <div className="informationAboutUsBoxBottom">
              <p>{info.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="easySteps">
        <div className="easyStepsLeft">
          <div className="easyStepsLeftTop">
            <h2>Easy Steps</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          {[
            { count: 1, title: "Select Your Doctor", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed tempor incididunt ut labore." },
            { count: 2, title: "Make an Appointment", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed tempor incididunt ut labore." },
            { count: 3, title: "Meet your Doctor", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed tempor incididunt ut labore." },
          ].map((step, index) => (
            <div key={index} className="easyStepsLeftBottom">
              <div className="easyStepsLeftBottomLeft">
                <h2>{step.count}</h2>
              </div>
              <div className="easyStepsLeftBottomRight">
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="easyStepsRight">
          <img src={doctor4} alt="Doctor" />
        </div>
      </div>







      <div className="appointment">
        <div className="appointmentTop">
          <h2>Make an Appointment</h2>
          <p>Dental or oral health is concerned with your teeth, gums and mouth. <br /> Healthy mouth free of infections, injuries, and other problems.</p>
        </div>
        <AppointmentForm/>
      </div>





      <div className="reviews">
        <div className="reviewsTop">
          <h2>Reviews From Our Patient.</h2>
          <p>We believe that focus and our associated programs are most <br /> instrumental in reducing readmissions and managing.</p>
          </div>
          <div className="reviewsCenter">
          {reviewsData.map((service, index) => (
            <ReviewsCard key={index} imgSrc={service.imgSrc} name={service.name} text={service.text} rating={service.rating} />
          ))}
          </div>
          <div className="reviewsButton">
            <h2>Our Newsletter</h2>
            <p>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. <br /> healthy mouth free of infections, injuries and other problems with.</p>
            <EmailSend/>
          </div>
      </div>

      <footer className="Copyright">
    <p>Copyright © 2020 All rights Reserved - Dental</p>
</footer>

    </div>
  );
}

export default App;
