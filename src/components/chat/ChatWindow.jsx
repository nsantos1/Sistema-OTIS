import React from "react";
import { FaPaperPlane, FaPlus, FaRegStar, FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function MessageBubble({ message, isSender }) {
  return (
    <div
      className={`d-flex flex-column mb-3 ${
        isSender ? "align-self-end" : "align-self-start"
      }`}
      style={{ maxWidth: "60%" }}
    >
      <div
        className={`p-2`}
        style={{
          borderRadius: "18px",
          fontSize: "14px",
          backgroundColor: isSender ? "#3182CE" : "#fff",
          color: isSender ? "#fff" : "#2d3748",
          borderBottomRightRadius: isSender ? "4px" : "18px",
          borderBottomLeftRadius: isSender ? "18px" : "4px",
          border: isSender ? "none" : "1px solid #e2e8f0",
        }}
      >
        {message.text}
      </div>
      <span
        className="text-secondary small mt-1"
        style={{
          marginLeft: isSender ? 0 : "5px",
          marginRight: isSender ? "5px" : 0,
        }}
      >
        {message.timestamp}
      </span>
    </div>
  );
}

function ChatWindow({
  conversation,
  currentUser,
  onSendMessage,
  onToggleFavorite,
  onCloseChat,
}) {
  if (!conversation) return null;

  const [newMessage, setNewMessage] = React.useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(conversation.id, newMessage);
      setNewMessage("");
    }
  };

  return (
    <div
      className="d-flex flex-column flex-grow-1"
      style={{ backgroundColor: "#f7fafc" }}
    >
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom border-secondary-subtle">
        <div className="d-flex align-items-center">
          <img
            src={conversation.participant.avatar}
            alt={conversation.participant.name}
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="d-flex flex-column">
            <span className="fw-semibold text-dark">
              {conversation.participant.name}
            </span>
            <span className="text-success small">Online agora</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn p-0"
            onClick={() => onToggleFavorite(conversation.id)}
          >
            {conversation.isFavorite ? (
              <FaStar className="text-warning fs-5" />
            ) : (
              <FaRegStar className="text-secondary fs-5" />
            )}
          </button>
          <button type="button" className="btn p-0">
            <FiMoreVertical className="text-secondary fs-5" />
          </button>
          <button type="button" className="btn p-0" onClick={onCloseChat}>
            <IoClose className="text-secondary fs-5" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-grow-1 overflow-auto p-3 d-flex flex-column">
        {conversation.messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isSender={msg.senderId === currentUser.id}
          />
        ))}
      </main>

      {/* Input */}
      <footer className="p-3 bg-white border-top border-secondary-subtle">
        <form onSubmit={handleSend} className="d-flex align-items-center gap-2">
          <button type="button" className="btn p-2 text-secondary">
            <FaPlus />
          </button>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Digite a sua mensagem aqui..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="btn p-2 text-primary">
            <FaPaperPlane />
          </button>
        </form>
      </footer>
    </div>
  );
}

export default ChatWindow;
