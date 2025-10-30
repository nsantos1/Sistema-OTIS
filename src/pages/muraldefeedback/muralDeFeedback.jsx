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
  const [hoverNovoAviso, setHoverNovoAviso] = useState(false);
  const [hoverSubmitBtn, setHoverSubmitBtn] = useState(false);

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

    return (
      authorMatch && messageMatch && setorMatch && urgentMatch && readMatch
    );
  });

  return (
    <main
      className="d-flex vh-100 overflow-hidden"
      style={{
        backgroundColor: "var(--cor-background)",
      }}
    >
      <Sidebar />
      <div className="d-flex flex-grow-1 overflow-y-auto mh-100">
        <BarraDeFiltrosMural filters={filters} onFilterChange={setFilters} />
        <div
          className="flex-grow-1 d-flex flex-column overflow-hidden"
          style={{
            paddingLeft: "40px",
            paddingTop: "40px",
          }}
        >
          <header
            className="d-flex justify-content-between align-items-start flex-shrink-0"
            style={{
              marginBottom: "30px",
              color: "var(--cor-principal)",
            }}
          >
            <div>
              <h1
                className="fs-3 fw-semibold mb-1"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                Mural de Comunicações
              </h1>
              <p
                className="fs-6 fw-normal m-0"
                style={{
                  color: "var(--cor-terciaria)",
                }}
              >
                Espaço para comunicados, avisos e feedbacks
              </p>
            </div>
            <button
              className="text-white border-0 rounded-3 fw-bolder d-flex align-items-center gap-2"
              style={{
                backgroundColor: hoverNovoAviso
                  ? "var(--cor-secundaria)"
                  : "var(--cor-principal)",
                padding: "12px 24px",
                fontSize: "14px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background-color 0.3s, transform 0.2s",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                marginRight: "65px",
              }}
              onMouseEnter={() => setHoverNovoAviso(true)}
              onMouseLeave={() => setHoverNovoAviso(false)}
              onClick={() => setIsModalOpen(true)}
            >
              <FaPlus />
              NOVO AVISO
            </button>
          </header>
          <div
            className="d-grid overflow-y-auto flex-grow-1 align-items-start align-content-start"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 350px))",
              gap: "25px",
              paddingRight: "15px",
            }}
          >
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
              <div
                className="text-center"
                style={{
                  gridColumn: "1 / -1",
                  padding: "60px 20px",
                  color: "var(--cor-secundaria)",
                }}
              >
                <h2
                  className="fs-4 fw-bold"
                  style={{
                    marginBottom: "10px",
                    color: "var(--cor-principal)",
                  }}
                >
                  Nenhum comunicado encontrado.
                </h2>
                <p className="fs-6 fw-normal">
                  Tente ajustar os filtros ou crie um novo aviso.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="position-fixed d-flex align-items-center justify-content-center"
          style={{
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: "1000",
            animation: "fadeIn 0.3s",
          }}
        >
          <div
            className="bg-white"
            style={{
              padding: "25px",
              borderRadius: "12px",
              width: "500px",
              maxWidth: "90%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              animation: "slideUp 0.4s",
            }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                borderBottom: "1px solid #e2e8f0",
                paddingBottom: "15px",
                marginBottom: "20px",
              }}
            >
              <h2
                className="fw-bold m-0"
                style={{
                  color: "var(--cor-principal)",
                  fontSize: "20px",
                }}
              >
                Novo Comunicado
              </h2>
              <button
                className="border-0 fs-4"
                style={{
                  background: "none",
                  cursor: "pointer",
                  color: "var(--cor-terciaria)",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <textarea
                className="w-100 rounded-3"
                style={{
                  boxSizing: "border-box",
                  minHeight: "120px",
                  border: "1px solid #cbd5e0",
                  padding: "10px",
                  fontSize: "14px",
                  resize: "vertical",
                  marginBottom: "15px",
                }}
                placeholder="Digite sua mensagem aqui..."
                value={newComunicado.message}
                onChange={(e) =>
                  setNewComunicado({
                    ...newComunicado,
                    message: e.target.value,
                  })
                }
              ></textarea>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  fontSize: "14px",
                }}
              >
                <label
                  className="d-flex align-items-center"
                  style={{
                    gap: "5px",
                    color: "var(--cor-terciaria)",
                  }}
                >
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
                  style={{
                    padding: "5px 10px",
                    borderRadius: "6px",
                    border: "1px solid #cbd5e0",
                  }}
                  value={newComunicado.setor}
                  onChange={(e) =>
                    setNewComunicado({
                      ...newComunicado,
                      setor: e.target.value,
                    })
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
            <div
              className="d-flex justify-content-end"
              style={{
                gap: "10px",
                marginTop: "25px",
              }}
            >
              <button
                className="border-0 fw-bold"
                style={{
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  backgroundColor: "#f0f0f0",
                  color: "var(--cor-terciaria)",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                CANCELAR
              </button>
              <button
                className="border-0 fw-bold"
                style={{
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  color: "#fff",
                  backgroundColor: hoverSubmitBtn
                    ? "var(--cor-secundaria)"
                    : "var(--cor-principal)",
                }}
                onMouseEnter={() => setHoverSubmitBtn(true)}
                onMouseLeave={() => setHoverSubmitBtn(false)}
                onClick={handlePublish}
              >
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
