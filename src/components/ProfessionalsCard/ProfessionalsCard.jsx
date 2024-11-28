import React from "react";
import './ProfessionalsCard.css';
import stethoscope from './../../assets/stethoscope.svg';




import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


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
                <div className="professionalsCardInfoRight"></div>
            </div>
        </div>
    );
};

export default ProfessionalsCard;
