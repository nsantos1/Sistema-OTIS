import React from "react";
import "./notification.css";
import { FaCheckCircle } from "react-icons/fa";

function Notification({ message }) {
  return (
    <div
      className="position-fixed text-white rounded-2 d-flex align-items-center"
      style={{
        bottom: "20px",
        right: "20px",
        backgroundColor: "#4bb543",
        padding: "15px 20px",
        gap: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        zIndex: "2000",
        animation: "slideIn 0.5s, fadeOut 0.5s 2.5s",
      }}
    >
      <FaCheckCircle
        style={{
          fontSize: "20px",
        }}
      />
      <p className="m-0 fw-semibold">{message}</p>
    </div>
  );
}

export default Notification;
