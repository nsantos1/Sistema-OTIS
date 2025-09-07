import React, { useState } from 'react';
import './feedbackCard.css';
import { FaCheck, FaThumbsUp, FaComment, FaExclamationTriangle } from "react-icons/fa";

function FeedbackCard({ authorName, authorRole, authorAvatar, timestamp, isUrgent, message, likes, comments }) {
  const [isRead, setIsRead] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const initial = authorName ? authorName.charAt(0) : '';

  const handleLike = () => {
      if(isLiked) {
          setLikeCount(likeCount - 1);
      } else {
          setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
  }

  return (
    <div className={`feedback-card ${isUrgent ? 'urgent-border' : ''}`}>
      <div className="card-header-mural">
        <div className="author-info">
          <img src={authorAvatar} alt={authorName} className="author-avatar"/>
          <div>
            <div className="author-name">{authorName}</div>
            <div className="author-role">{authorRole}</div>
          </div>
        </div>
        <div className="timestamp-details">
          <span className="timestamp">{timestamp}</span>
          {isUrgent && <span className="urgent-tag"><FaExclamationTriangle/> URGENTE</span>}
        </div>
      </div>
      <div className="card-body-mural">
        <p>{message}</p>
      </div>
      <div className="card-footer-mural">
        <div className="card-actions">
            <button className={`action-btn ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
                <FaThumbsUp /> {likeCount}
            </button>
            <button className="action-btn">
                <FaComment /> {comments}
            </button>
        </div>
        <label
          htmlFor={`read-checkbox-${timestamp}-${authorName}`}
          className={`read-confirmation ${isRead ? 'read' : ''}`}
        >
          <input
            id={`read-checkbox-${timestamp}-${authorName}`}
            type="checkbox"
            checked={isRead}
            onChange={() => setIsRead(!isRead)}
          />
          <span className="custom-checkbox">
            {isRead && <FaCheck />}
          </span>
          {isRead ? 'Leitura confirmada' : 'Confirmar leitura'}
        </label>
      </div>
    </div>
  );
}

export default FeedbackCard;