import React from 'react';
import './AdminComments.css';
import axios from 'axios'
import { useState } from 'react'








const AdminComments = () => {


  const [comment, setСomment] = useState('');
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  
  const sendСomment = () => {
      axios.post('http://localhost:3000/send-comment', { comment, name, rating })
        .then((res) => {
          console.log(res);
          alert('comment sent successfully');
        })
        .catch((err) => {
          console.error(err);
          alert('Failed to send comment');
        });
    };
  

  return (
    <div className="adminComments">
      <div className="adminCommentsLeft">
        <div className="adminCommentsLeftTop">
          <h1>Comments</h1>
        </div>

        <div className="adminCommentsLeftBottom">
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
        onChange={(e) => setСomment(e.target.value)}
      />
      
      <select id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} defaultValue="1" className="createCommentSelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="createCommentButton" onClick={sendСomment}>Create</button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
