import React, { useEffect, useState } from 'react';
import './ReviewsCard.css';
import axios from 'axios';
import people3 from '/people 3.png';
import './ReviewsCard.css';
import Star1 from './../../assets/star 1.svg';
import Star2 from './../../assets/star 2.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const ReviewsCard = () => {
  const [comments, setComments] = useState([]);

  // Функція для отримання коментарів
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Помилка при отриманні коментарів:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={1}
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
      {comments.map((comment) => {
        const validRating = Math.min(Math.max(comment.rating || 0, 0), 5);
        const filledStars = Array(validRating).fill(Star1);
        const emptyStars = Array(5 - validRating).fill(Star2);

        return (
          <SwiperSlide
            key={comment.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div className="reviewsCard">
              <div className="reviewsCardTop">
                <img className="reviewsCard-img" src={people3} alt={comment.name} />
                <h2 className="reviewsCard-name">{comment.name}</h2>
              </div>
              <div className="reviewsCardCenter">
                <p className="reviewsCard-text">{comment.comment}</p>
              </div>
              <div className="reviewsCardButton">
                <div className="reviewsCard-star">
                  {filledStars.map((star, index) => (
                    <img
                      key={`filled-${index}`}
                      src={star}
                      alt="filled star"
                      className="filled"
                    />
                  ))}
                  {emptyStars.map((star, index) => (
                    <img
                      key={`empty-${index}`}
                      src={star}
                      alt="empty star"
                      className="empty"
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewsCard;
