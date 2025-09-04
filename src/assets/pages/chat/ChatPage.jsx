import React, { useState } from 'react';
import ConversationsList from '../../componentes/chat/ConversationsList';
import ChatWindow from '../../componentes/chat/ChatWindow';
import ChatPlaceholder from '../../componentes/chat/ChatPlaceholder';
import { chatData } from '../../data/chatData';
import './ChatPage.css';

function ChatPage() {
  const [conversations, setConversations] = useState(chatData.conversations);
  const [activeConversationId, setActiveConversationId] = useState(null);

  const handleSendMessage = (convoId, messageText) => {
    const newMessage = {
      id: `msg_${Date.now()}`,
      senderId: chatData.currentUser.id,
      text: messageText,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    const updatedConversations = conversations.map(convo => {
      if (convo.id === convoId) {
        return { ...convo, messages: [...convo.messages, newMessage] };
      }
      return convo;
    });

    setConversations(updatedConversations);
  };

  const handleToggleFavorite = (convoId) => {
    const updatedConversations = conversations.map(convo => {
      if (convo.id === convoId) {
        return { ...convo, isFavorite: !convo.isFavorite };
      }
      return convo;
    });
    setConversations(updatedConversations);
  };
  
  
  const handleCloseChat = () => {
    setActiveConversationId(null);
  };

  const activeConversation = conversations.find(c => c.id === activeConversationId);

  return (
    <div className="chat-page-container">
      <ConversationsList
        conversations={conversations}
        activeConversationId={activeConversationId}
        onConversationClick={setActiveConversationId}
      />
      {activeConversation ? (
        <ChatWindow
          conversation={activeConversation}
          currentUser={chatData.currentUser}
          onSendMessage={handleSendMessage}
          onToggleFavorite={handleToggleFavorite}
         
          onCloseChat={handleCloseChat}
        />
      ) : (
        <ChatPlaceholder />
      )}
    </div>
  );
}

export default ChatPage;