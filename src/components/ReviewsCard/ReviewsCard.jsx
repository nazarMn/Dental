import React from "react";
import './ReviewsCard.css';
import Star1 from './../../assets/star 1.svg';
import Star2 from './../../assets/star 2.svg';

const ReviewsCard = ({ imgSrc, name, text, rating }) => {
  // Створюємо масив для заповнених і порожніх зірок
  const filledStars = Array(rating).fill(Star1); 
  const emptyStars = Array(5 - rating).fill(Star2); 

  return (
    <div className="reviewsCard">
        <div className="reviewsCardTop">
      <img src={imgSrc} alt={name} className="reviewsCard-img" />
      <h2 className="reviewsCard-name">{name}</h2>
      </div>
      <div className="reviewsCardCenter">
      <p className="reviewsCard-text">{text}</p>
      </div>
      <div className="reviewsCardButton">
      
      <div className="reviewsCard-star">
          {filledStars.map((star, index) => (
            <img key={`filled-${index}`} src={star} alt="filled star" className="filled" />
          ))}
          {emptyStars.map((star, index) => (
            <img key={`empty-${index}`} src={star} alt="empty star" className="empty" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
