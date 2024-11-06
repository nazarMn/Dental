import React from "react";
import './ProfessionalsCard.css';
import stethoscope from './../../assets/stethoscope.svg';



const ProfessionalsCard = ({ imgSrc, title, specialist }) => {
    return (
        <div className="professionalsCard">
            <div className="professionalsCardImg">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="professionalsCardInfo">
                <div className="professionalsCardInfoLeft">
                <img src={stethoscope} alt="stethoscope" />
                </div>
                <div className="professionalsCardInfoCenter">
                <h2>{title}</h2>
                <p>{specialist}</p>
                </div>
                <div className="professionalsCardInfoRight">
                </div>
            </div>
            
        </div>
    );
};

export default ProfessionalsCard