import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewsCreate.css';

const ReviewsCreate = () => {


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
        });
    };

    return (
        <div className="reviewsCreate">
            <div className="reviewsCreateTop">
                
                <h2>Leave Your Review</h2>
                <input type="text" placeholder="Your Name" className="reviewsCreateInput"   value={name}
              onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="reviewsCreateCenter">
                <textarea
                    placeholder="Write your comment here..."
                    className="commentInput"
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div className="reviewsCreateBottom">
                <div className="rating">
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        name="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              defaultValue="1"
                        className="ratingSelect"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button className="reviewsCreateButton" onClick={sendComment}>Submit</button>
            </div>
        </div>
    );
};

export default ReviewsCreate;
