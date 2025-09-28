import React, { useState } from "react";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import BarraDeFiltrosMural from "../../components/barraDeFiltros/barraDeFiltrosMural";
import FeedbackCard from "../../components/mural/feedbackCard";
import Notification from "../../components/mural/notification";
import { FaPlus } from "react-icons/fa";
import "./muralDeFeedback.css";

const initialFeedbackData = [
  {
    id: 1,
    authorName: "João Ricardo",
    authorRole: "Supervisor de fábrica",
    authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    timestamp: "05/09/2025 - 10:54h",
    isUrgent: true,
    message:
      "Reunião geral marcada para segunda-feira às 9h, na sala de conferências. Presença obrigatória de todos os colaboradores.",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    authorName: "Carla Souza",
    authorRole: "Supervisora de fábrica",
    authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
    timestamp: "04/09/2025 - 14:19h",
    isUrgent: false,
    message:
      "Parabéns à equipe do turno da manhã! Bateram a meta de produção pelo terceiro mês seguido. Ótimo trabalho!",
    likes: 45,
    comments: 12,
  },
  {
    id: 3,
    authorName: "Pedro Alves",
    authorRole: "Supervisor de vendas",
    authorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
    timestamp: "02/09/2025 - 17:45h",
    isUrgent: false,
    message:
      "Reajuste nos preços será debatido na reunião de vendas de hoje. Favor revisar os materiais de apoio.",
    likes: 8,
    comments: 1,
  },
  {
    id: 4,
    authorName: "Ricardo Alves",
    authorRole: "Supervisor de fábrica",
    authorAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
    timestamp: "01/09/2025 - 11:24h",
    isUrgent: false,
    message:
      "Uso obrigatório de capacete e protetor auricular em todas as áreas de produção. Fiscalizações começarão ainda hoje.",
    likes: 23,
    comments: 5,
  },
  {
    id: 5,
    authorName: "Marina Costa",
    authorRole: "Gerente de RH",
    authorAvatar: "https://randomuser.me/api/portraits/women/5.jpg",
    timestamp: "31/08/2025 - 10:54h",
    isUrgent: true,
    message:
      "Último prazo para envio das horas extras de setembro: sexta-feira, até as 18h.",
    likes: 15,
    comments: 2,
  },
];

function MuralDeFeedback() {
  const [feedbackData, setFeedbackData] = useState(initialFeedbackData);
  const [filters, setFilters] = useState({
    authorName: "",
    message: "",
    setor: [],
    isUrgent: "todos",
    isRead: "todos",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readStatus, setReadStatus] = useState({});
  const [notification, setNotification] = useState(null);
  const [newComunicado, setNewComunicado] = useState({
    message: "",
    isUrgent: false,
    setor: "Todos",
  });

  const handleToggleRead = (id) => {
    setReadStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePublish = () => {
    const newId = feedbackData.length + 1;
    const newPost = {
      id: newId,
      authorName: "Você",
      authorRole: "Admin",
      authorAvatar: "https://randomuser.me/api/portraits/men/0.jpg",
      timestamp: new Date().toLocaleString("pt-BR"),
      isUrgent: newComunicado.isUrgent,
      message: newComunicado.message,
      likes: 0,
      comments: 0,
    };
    setFeedbackData([newPost, ...feedbackData]);
    setIsModalOpen(false);
    setNewComunicado({ message: "", isUrgent: false, setor: "Todos" });
    setNotification("Comunicado publicado com sucesso!");
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredFeedbacks = feedbackData.filter((item) => {
    const authorMatch = filters.authorName
      ? item.authorName.toLowerCase().includes(filters.authorName.toLowerCase())
      : true;
    const messageMatch = filters.message
      ? item.message.toLowerCase().includes(filters.message.toLowerCase())
      : true;
    const setorMatch =
      filters.setor && filters.setor.length > 0
        ? filters.setor.some((s) =>
            item.authorRole.toLowerCase().includes(s.toLowerCase())
          )
        : true;
    const urgentMatch =
      filters.isUrgent === "sim"
        ? item.isUrgent
        : filters.isUrgent === "nao"
        ? !item.isUrgent
        : true;
    const readMatch =
      filters.isRead === "sim"
        ? readStatus[item.id]
        : filters.isRead === "nao"
        ? !readStatus[item.id]
        : true;

    return authorMatch && messageMatch && setorMatch && urgentMatch && readMatch;
  });

  return (
    <main className="main-mural">
      <Sidebar />
      <div className="mural-container">
        <BarraDeFiltrosMural filters={filters} onFilterChange={setFilters} />
        <div className="mural-content">
          <header className="mural-header">
            <div>
              <h1>Mural de Comunicações</h1>
              <p>Espaço para comunicados, avisos e feedbacks</p>
            </div>
            <button
              className="novo-aviso-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus />
              NOVO AVISO
            </button>
          </header>
          <div className="feedback-grid">
            {filteredFeedbacks.length > 0 ? (
              filteredFeedbacks.map((feedback) => (
                <FeedbackCard
                  key={feedback.id}
                  {...feedback}
                  isRead={!!readStatus[feedback.id]}
                  onToggleRead={() => handleToggleRead(feedback.id)}
                />
              ))
            ) : (
              <div className="no-results-mural">
                <h2>Nenhum comunicado encontrado.</h2>
                <p>Tente ajustar os filtros ou crie um novo aviso.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>Novo Comunicado</h2>
              <button
                className="close-modal"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <textarea
                placeholder="Digite sua mensagem aqui..."
                value={newComunicado.message}
                onChange={(e) =>
                  setNewComunicado({ ...newComunicado, message: e.target.value })
                }
              ></textarea>
              <div className="modal-options">
                <label>
                  <input
                    type="checkbox"
                    checked={newComunicado.isUrgent}
                    onChange={(e) =>
                      setNewComunicado({
                        ...newComunicado,
                        isUrgent: e.target.checked,
                      })
                    }
                  />{" "}
                  Marcar como urgente
                </label>
                <select
                  value={newComunicado.setor}
                  onChange={(e) =>
                    setNewComunicado({ ...newComunicado, setor: e.target.value })
                  }
                >
                  <option>Visível para: Todos</option>
                  <option>Visível para: Vendas</option>
                  <option>Visível para: Fábrica</option>
                  <option>Visível para: RH</option>
                  <option>Visível para: Engenharia</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                CANCELAR
              </button>
              <button className="submit-btn" onClick={handlePublish}>
                PUBLICAR
              </button>
            </div>
          </div>
        </div>
      )}
      {notification && <Notification message={notification} />}
    </main>
  );
}

export default MuralDeFeedback;