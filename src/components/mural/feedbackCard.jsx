import React, { useState } from "react";
import "./feedbackCard.css";
import {
  FaCheck,
  FaThumbsUp,
  FaComment,
  FaExclamationTriangle,
} from "react-icons/fa";

function FeedbackCard({
  id,
  authorName,
  authorRole,
  authorAvatar,
  timestamp,
  isUrgent,
  message,
  likes,
  comments,
  isRead,
  onToggleRead,
}) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={`feedback-card ${isUrgent ? "urgent-border" : ""}`}>
      <div
        className="d-flex justify-content-between mb-3"
        style={{
          alignItems: "flex-start",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            gap: "12px",
          }}
        >
          <img
            src={authorAvatar}
            alt={authorName}
            className="rounded-circle object-fit-cover"
            style={{
              width: "45px",
              height: "45px",
            }}
          />
          <div>
            <div className="fw-bold fs-6">{authorName}</div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--cor-terciaria)",
              }}
            >
              {authorRole}
            </div>
          </div>
        </div>
        <div className="text-end">
          <span
            style={{
              fontSize: "12px",
              color: "var(--cor-terciaria)",
            }}
          >
            {timestamp}
          </span>
          {isUrgent && (
            <span
              className="d-inline-flex align-items-center fw-bolder py-1 px-2 text-uppercase"
              style={{
                gap: "5px",
                backgroundColor: "#FFF5F5",
                color: "#C53030",
                fontSize: "11px",
                borderRadius: "12px",
                marginTop: "6px",
              }}
            >
              <FaExclamationTriangle /> URGENTE
            </span>
          )}
        </div>
      </div>
      <div>
        <p
          className="m-0"
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#2d3748",
          }}
        >
          {message}
        </p>
      </div>
      <div
        className="pt-3 mt-3 d-flex justify-content-between align-items-center"
        style={{
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div className="d-flex gap-2">
          <button
            className={`action-btn ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <FaThumbsUp /> {likeCount}
          </button>
          <button className="action-btn">
            <FaComment /> {comments}
          </button>
        </div>
        <label
          htmlFor={`read-checkbox-${id}`}
          className={`read-confirmation ${isRead ? "read" : ""}`}
        >
          <input
            id={`read-checkbox-${id}`}
            type="checkbox"
            checked={isRead}
            onChange={onToggleRead}
          />
          <span
            className="custom-checkbox rounded-1 d-flex align-items-center justify-content-center"
            style={{
              width: "18px",
              height: "18px",
              transition: "all 0.2s",
            }}
          >
            {isRead && <FaCheck />}
          </span>
          {isRead ? "Leitura confirmada" : "Confirmar leitura"}
        </label>
      </div>
    </div>
  );
}

export default FeedbackCard;
