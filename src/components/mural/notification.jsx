import React from "react";
import "./Notification.css";
import { FaCheckCircle } from "react-icons/fa";

function Notification({ message }) {
  return (
    <div className="notification-container">
      <FaCheckCircle className="notification-icon" />
      <p>{message}</p>
    </div>
  );
}

export default Notification;