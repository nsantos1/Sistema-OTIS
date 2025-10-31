import { useState, useRef } from "react";
import CardColaborador from "../../components/colaboradores/cardColaborador/cardColaborador";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import "./colaboradores.css";
import CarregarMais from "../../components/carregarMais/carregarMais";
import CabecalhoColaboradores from "../../components/colaboradores/cabecalhoColaboradores/cabecalhoColaboradores";
import BarraDeFiltrosColaboradores from "../../components/barraDeFiltros/barraDeFiltrosColaboradores";
import { colaboradoresData as initialColaboradoresData } from "../../assets/data/colaboradoresData";

const ITEMS_PER_LOAD = 12;

export default function Colaboradores() {
    const [colaboradores, setColaboradores] = useState(initialColaboradoresData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_LOAD);
    const [newColabImage, setNewColabImage] = useState(null);
    const fileInputRef = useRef(null);
    const [newColabData, setNewColabData] = useState({
        nome: "",
        cargo: "-",
        setor: "-",
        local: "",
        inicio: "",
        termino: "",
        email: "",
        telefone: "",
    });

    const [filters, setFilters] = useState({
        nome: "",
        cargo: [],
        setor: [],
        status: "todos",
    });

    const abrirModal = () => {
        setIsModalOpen(true);
        setNewColabImage(null);
    };

    const fecharModal = () => {
        setIsModalOpen(false);
        setNewColabImage(null);
        setNewColabData({
            nome: "",
            cargo: "-",
            setor: "-",
            local: "",
            inicio: "",
            termino: "",
            email: "",
            telefone: "",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewColabData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setNewColabImage(URL.createObjectURL(file));
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleCriarColaborador = () => {
        const newId = `#FO-${303070 + colaboradores.length + 1}`;

        // Lógica para gerar um avatar real aleatório
        const randomId = Math.floor(Math.random() * 70) + 1; // Gera um número de 1 a 70
        const randomAvatarUrl = `https://randomuser.me/api/portraits/men/${randomId}.jpg`;

        const novoColaborador = {
            id: newId,
            nome: newColabData.nome,
            status: "ativo",
            cargo: newColabData.cargo,
            setor: newColabData.setor,
            supervisor: "A Definir",
            avatarUrl: newColabImage || randomAvatarUrl, // Usa o avatar real aleatório se nenhum for enviado
        };
        setColaboradores([novoColaborador, ...colaboradores]);
        fecharModal();
        setItemsToShow(ITEMS_PER_LOAD);
    };

    const handleCarregarMais = () => {
        setItemsToShow((prev) => prev + ITEMS_PER_LOAD);
    };

    const filteredColaboradores = colaboradores.filter((colaborador) => {
        const nomeMatch = filters.nome
            ? colaborador.nome.toLowerCase().includes(filters.nome.toLowerCase())
            : true;
        const cargoMatch =
            filters.cargo.length > 0
                ? filters.cargo.includes(colaborador.cargo)
                : true;
        const setorMatch =
            filters.setor.length > 0
                ? filters.setor.includes(colaborador.setor)
                : true;
        const statusMatch =
            filters.status && filters.status !== "todos"
                ? colaborador.status.toLowerCase().replace(" ", "-") === filters.status
                : true;

        return nomeMatch && cargoMatch && setorMatch && statusMatch;
    });

    const displayedColaboradores = filteredColaboradores.slice(0, itemsToShow);
    const showCarregarMais = itemsToShow < filteredColaboradores.length;
    const noResults = filteredColaboradores.length === 0;

    return (
        <main
            className="d-flex vh-100 overflow-hidden"
            style={{
                backgroundColor: "var(--cor-background)",
            }}
        >
            <div>
                <Sidebar />
            </div>
            <div className="d-flex w-100">
                <BarraDeFiltrosColaboradores
                    filters={filters}
                    onFilterChange={setFilters}
                />
                <div
                    className="flex-grow-1 overflow-y-auto"
                    style={{
                        padding: "0 40px 40px 40px",
                    }}
                >
                    <CabecalhoColaboradores
                        btFunc={abrirModal}
                        totalColaboradores={colaboradores.length}
                        colaboradoresAtivos={
                            colaboradores.filter((c) => c.status === "ativo").length
                        }
                        colaboradoresTreinamento={
                            colaboradores.filter((c) => c.status === "em treinamento").length
                        }
                        colaboradoresInativos={
                            colaboradores.filter((c) => c.status === "inativo").length
                        }
                    />

                    <div
                        className="d-grid"
                        style={{
                            gridTemplateColumns: "repeat(auto-fill, minmax(252px, 1fr))",
                            gap: "25px",
                        }}
                    >
                        {noResults ? (
                            <div
                                className="text-center"
                                style={{
                                    gridColumn: "1 / -1",
                                    padding: "60px 20px",
                                    color: "var(--cor-secundaria)",
                                }}
                            >
                                <h2
                                    className="fw-bold"
                                    style={{
                                        fontSize: "30px",
                                        marginBottom: "10px",
                                        color: "var(--cor-principal)",
                                    }}
                                >
                                    Nenhum colaborador encontrado!
                                </h2>
                                <p
                                    className="fw-medium"
                                    style={{
                                        fontSize: "18px",
                                    }}
                                >
                                    Tente ajustar seus filtros ou cadastre um novo colaborador.
                                </p>
                            </div>
                        ) : (
                            displayedColaboradores.map((colaborador) => (
                                <CardColaborador key={colaborador.id} {...colaborador} />
                            ))
                        )}
                    </div>

                    {showCarregarMais && !noResults && (
                        <CarregarMais item={"colaboradores"} btFunc={handleCarregarMais} />
                    )}
                </div>

        {isModalOpen && (
          <>
            <div
              className="position-fixed w-100 h-100 opacity-1"
              style={{
                top: "0",
                left: "0",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: "998",
                animation: "fadeIn 0.3s forwards",
              }}
              onClick={fecharModal}
            ></div>
            <div
              className="position-fixed bg-white opacity-1"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.8)",
                padding: "2rem",
                borderRadius: "12px",
                width: "600px",
                maxWidth: "90%",
                zIndex: "999",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3",
                animation: "scaleFadeIn 0.3s forwards",
              }}
            >
              <h2
                className="fw-bolder text-uppercase text-center fs-2"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                Novo Colaborador
              </h2>

                            <div className="d-flex align-items-center gap-3 mt-3 mb-4">
                                <input
                                    className="rounded-2"
                                    style={{
                                        padding: "6px 10px",
                                        border: "1px solid #ccc",
                                        display: "none",
                                    }}
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />

                                <div>
                                    <img
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "130px",
                                            height: "130px",
                                        }}
                                        src={newColabImage || "../src/assets/img/person.svg"}
                                        alt="Foto do Colaborador"
                                    />
                                </div>
                                <span
                                    className="fw-bold fs-4"
                                    style={{
                                        color: "var(--cor-principal)",
                                    }}
                                    onClick={handleUploadClick}
                                >
                                    Adicionar foto
                                </span>
                            </div>

              <div
                className="d-flex mb-4"
                style={{
                  gap: "2rem",
                }}
              >
                <div
                  className="d-flex flex-column"
                  style={{
                    flex: "1",
                    gap: "0.8rem",
                  }}
                >
                  <h3
                    className="fs-4 fw-bold mb-2"
                    style={{
                      color: "var(--cor-principal)",
                    }}
                  >
                    Dados gerais
                  </h3>
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Nome
                  </label>
                  <input
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    type="text"
                    name="nome"
                    value={newColabData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite o nome completo"
                  />
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Cargo
                  </label>
                  <select
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    name="cargo"
                    value={newColabData.cargo}
                    onChange={handleInputChange}
                  >
                    <option>-</option>
                    <option>Operário</option>
                    <option>Engenheiro</option>
                    <option>Supervisor</option>
                    <option>Gerente</option>
                  </select>
                  <h3>Trabalho</h3>
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Setor
                  </label>
                  <select
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    name="setor"
                    value={newColabData.setor}
                    onChange={handleInputChange}
                  >
                    <option>-</option>
                    <option>Fábrica</option>
                    <option>Vendas</option>
                    <option>RH</option>
                    <option>Engenharia</option>
                  </select>
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Local de trabalho
                  </label>
                  <input
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    type="text"
                    name="local"
                    value={newColabData.local}
                    onChange={handleInputChange}
                    placeholder="Digite o endereço de trabalho"
                  />
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Horário de trabalho
                  </label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="rounded-2"
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #ccc",
                        flex: "1",
                      }}
                      type="time"
                      name="inicio"
                      value={newColabData.inicio}
                      onChange={handleInputChange}
                    />
                    <span>—</span>
                    <input
                      className="rounded-2"
                      style={{
                        padding: "6px 10px",
                        border: "1px solid #ccc",
                        flex: "1",
                      }}
                      type="time"
                      name="termino"
                      value={newColabData.termino}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div
                  className="d-flex flex-column"
                  style={{
                    flex: "1",
                    gap: "0.8rem",
                  }}
                >
                  <h3
                    className="fs-4 fw-bold mb-2"
                    style={{
                      color: "var(--cor-principal)",
                    }}
                  >
                    Contato
                  </h3>
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    type="email"
                    name="email"
                    value={newColabData.email}
                    onChange={handleInputChange}
                    placeholder="Digite o email do colaborador"
                  />
                  <label
                    className="fw-semibold"
                    style={{
                      color: "var(--cor-principal)",
                      fontSize: "20px",
                    }}
                  >
                    Telefone
                  </label>
                  <input
                    className="rounded-2"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                    }}
                    type="tel"
                    name="telefone"
                    value={newColabData.telefone}
                    onChange={handleInputChange}
                    placeholder="Digite o telefone do colaborador"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end gap-3">
                <button
                  className="text-white border-0 fw-bold py-2 px-3 rounded-2"
                  style={{
                    backgroundColor: "#0d2d56",
                    cursor: "pointer",
                  }}
                  onClick={handleCriarColaborador}
                >
                  CRIAR
                </button>
                <button
                  className="border-0 fw-bold py-2 px-3 rounded-2"
                  style={{
                    backgroundColor: "#ccc",
                    color: "#1a1a1a",
                    cursor: "pointer",
                  }}
                  onClick={fecharModal}
                >
                  CANCELAR
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
