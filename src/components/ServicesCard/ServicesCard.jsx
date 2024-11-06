import React from "react";
import './ServicesCard.css';
import arrow1 from './../../assets/arrow 1.svg';




const ServicesCard = ({ imgSrc, title }) => {
    return (
        <div className="servicesCard">
            <div className="servicesCardImg">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="servicesCardText">
                <h2>{title}</h2>
                <p>Dental or oral health is concerned <br /> with your teeth, gums and mouth. <br /> healthy mouth, free of infections.</p>
            </div>
            <div className="servicesCardMore">
                <h3>Read more</h3> <img src={arrow1} alt="arrow" />
            </div>
        </div>
    );
};

export default ServicesCard