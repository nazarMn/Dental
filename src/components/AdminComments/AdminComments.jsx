import React, { useEffect, useState } from 'react';
import './AdminComments.css';
import axios from 'axios';
import people3 from '/people 3.png';
import Star1 from './../../assets/star 1.svg';
import Star2 from './../../assets/star 2.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AdminComments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);

  // Функція для відправки коментаря
  const sendComment = () => {
    axios
      .post('http://localhost:3000/send-comment', { comment, name, rating })
      .then((res) => {
        alert('Comment sent successfully');
        fetchComments(); // Оновлюємо список коментарів
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send comment');
      });
  };

  // Функція для отримання коментарів
  const fetchComments = () => {
    fetch('http://localhost:3000/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Помилка при отриманні коментарів:', err));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="adminComments">
      <div className="adminCommentsLeft">
        <div className="adminCommentsLeftTop">
          <h1>Comments</h1>
        </div>

        <div className="adminCommentsLeftBottom">
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
     height: '100%',  // Allow swiper to take full height of its container
     display: 'flex',
     alignItems: 'center', // Center content vertically
     justifyContent: 'center', // Center content horizontally
   }}
>
  {comments.map((comment) => {
    const validRating = Math.min(Math.max(comment.rating || 0, 0), 5);
    const filledStars = Array(validRating).fill(Star1);
    const emptyStars = Array(5 - validRating).fill(Star2);

    return (
      <SwiperSlide key={comment.id}
        style={{
          display: 'flex',
          alignItems: 'center', // Center content vertically
          justifyContent: 'center', // Center content horizontally
          width: '100%', // Prevent shrinking
         
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
                <img key={`filled-${index}`} src={star} alt="filled star" className="filled" />
              ))}
              {emptyStars.map((star, index) => (
                <img key={`empty-${index}`} src={star} alt="empty star" className="empty" />
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

        </div>
      </div>

      <div className="horizontalLine"></div>

      <div className="adminCommentsRight">
        <div className="adminCommentsRightTop">
          <h2>Create a comment</h2>
        </div>

        <div className="adminCommentsRightBottom">
          <div className="createCommentBox">
            <input
              type="text"
              placeholder="Name"
              className="createCommentInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Comment"
              className="createCommentTextarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              defaultValue="1"
              className="createCommentSelect"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="createCommentButton" onClick={sendComment}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
