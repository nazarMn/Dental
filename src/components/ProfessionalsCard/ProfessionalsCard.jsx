import React, { useEffect, useState } from "react";
import './ProfessionalsCard.css';
import stethoscope from './../../assets/stethoscope.svg';
import axios from 'axios';

// Import Swiper and its modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ProfessionalsCard = () => {
    const [doctors, setDoctors] = useState([]);

    // Function to fetch doctors data
    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:3000/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {doctors.map((doctor) => (
                <SwiperSlide
                    key={doctor.id}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <div className="professionalsCard">
                        <div className="professionalsCardImg">
                            <img src={doctor.photo} alt={doctor.name} />
                        </div>
                        <div className="professionalsCardInfo">
                            <div className="professionalsCardInfoLeft">
                                <img src={stethoscope} alt="stethoscope" />
                            </div>
                            <div className="professionalsCardInfoCenter">
                                <h2>{doctor.name}</h2>
                                <p>{doctor.specialty}</p>
                            </div>
                            <div className="professionalsCardInfoRight"></div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProfessionalsCard;
