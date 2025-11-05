import React, { useState } from "react";
import ConversationItem from "./conversationItem";
import { IoSearch } from "react-icons/io5";
import "./ConversationsList.css";

function ConversationsList({
  conversations,
  activeConversationId,
  onConversationClick,
}) {
  const [activeTab, setActiveTab] = useState("recentes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations
    .filter((convo) => (activeTab === "favoritas" ? convo.isFavorite : true))
    .filter((convo) =>
      convo.participant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <aside
      className="d-flex flex-column bg-white"
      style={{
        width: "380px",
        borderRight: "1px solid #e2e8f0",
        flexShrink: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <h2
          className="mb-3 fs-4 fw-semibold"
          style={{
            color: "var(--cor-principal)",
          }}
        >
          Canal Interno
        </h2>
        <div className="position-relative">
          <input
            className="w-100 py-1 ps-3 rounded-5 fs-6"
            style={{
              border: "1px solid #cbd5e0",
              boxSizing: "border-box",
            }}
            type="text"
            placeholder="Pesquise o nome do colaborador..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch
            className="position-absolute"
            style={{
              left: "90%",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#a0aec0",
            }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div
        className="d-flex py-2 px-3"
        style={{
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <button
          className={`tab-button ${activeTab === "recentes" ? "active" : ""}`}
          onClick={() => setActiveTab("recentes")}
        >
          Recentes
        </button>
        <button
          className={`tab-button ${activeTab === "favoritas" ? "active" : ""}`}
          onClick={() => setActiveTab("favoritas")}
        >
          Favoritas
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-grow-1 overflow-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((convo) => (
            <ConversationItem
              key={convo.id}
              conversation={convo}
              isActive={convo.id === activeConversationId}
              onClick={onConversationClick}
            />
          ))
        ) : (
          <div className="no-conversations-found">
            <p>Nenhuma conversa encontrada.</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ConversationsList;
