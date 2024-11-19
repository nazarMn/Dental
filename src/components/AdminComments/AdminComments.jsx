import React from 'react';
import './AdminComments.css';

const AdminComments = () => {
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
      />
      <textarea
        type="text"
        placeholder="Comment"
        className="createCommentTextarea"
      />
      
      <select id="rating" defaultValue="1" className="createCommentSelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className="createCommentButton">Create</button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
