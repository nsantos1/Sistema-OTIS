import React from "react";

function ChatPlaceholder() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
      style={{ backgroundColor: "#f7fafc", color: "#a0aec0" }}
    >
      <h1
        className="fw-bold m-0"
        style={{
          fontSize: "96px",
          color: "var(--cor-principal)",
          opacity: 0.8,
        }}
      >
        OTIS
      </h1>

      <p className="mt-2 mb-0 fs-6">
        Selecione uma conversa pra iniciar um chat.
      </p>
    </div>
  );
}

export default ChatPlaceholder;
