import React from "react";

function ConversationItem({ conversation, isActive, onClick }) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <div
      className="d-flex align-items-center p-3"
      onClick={() => onClick(conversation.id)}
      style={{
        cursor: "pointer",
        borderBottom: "1px solid #e2e8f0",
        backgroundColor: isActive ? "#ebf8ff" : "transparent",
        borderRight: isActive ? "3px solid #3182CE" : "none",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) =>
        !isActive && (e.currentTarget.style.backgroundColor = "#f7fafc")
      }
      onMouseLeave={(e) =>
        !isActive && (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <img
        src={conversation.participant.avatar}
        alt={conversation.participant.name}
        className="rounded-circle me-3"
        style={{ width: "48px", height: "48px" }}
      />
      <div className="flex-grow-1 text-truncate">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <div className="d-flex flex-column">
            <span
              className="fw-bold"
              style={{
                color: "var(--cor-principal)",
              }}
            >
              {conversation.participant.name}
            </span>
            <span className="text-secondary" style={{ fontSize: "13px" }}>
              {conversation.participant.jobTitle}
            </span>
          </div>
          <span className="text-secondary small text-nowrap ms-2">
            {lastMessage.timestamp}
          </span>
        </div>
        <p
          className="mb-0 text-truncate text-secondary"
          style={{ paddingLeft: "1px", fontSize: "14px" }}
        >
          {lastMessage.text}
        </p>
      </div>
    </div>
  );
}

export default ConversationItem;
