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
      avatarUrl:
        newColabImage || randomAvatarUrl, // Usa o avatar real aleatório se nenhum for enviado
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
    <main className="main-container">
      <div className="container-sidebar">
        <Sidebar />
      </div>
      <div className="container-page">
        <BarraDeFiltrosColaboradores
          filters={filters}
          onFilterChange={setFilters}
        />
        <div className="conteudo-principal-colaboradores">
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

          <div className="secao-colaboradores">
            {noResults ? (
              <div className="no-results-message">
                <h2>Nenhum colaborador encontrado!</h2>
                <p>
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
            <div className="fundo-escuro" onClick={fecharModal}></div>
            <div className="modal-conteudo">
              <h2>Novo Colaborador</h2>

              <div className="foto-container">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  accept="image/*"
                />

                <div className="foto-placeholder">
                  <img
                    src={newColabImage || "../src/assets/img/person.svg"}
                    alt="Foto do Colaborador"
                  />
                </div>
                <span onClick={handleUploadClick}>Adicionar foto</span>
              </div>

              <div className="modal-form">
                <div className="dados-gerais">
                  <h3>Dados gerais</h3>
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={newColabData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite o nome completo"
                  />
                  <label>Cargo</label>
                  <select
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
                  <label>Setor</label>
                  <select
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
                  <label>Local de trabalho</label>
                  <input
                    type="text"
                    name="local"
                    value={newColabData.local}
                    onChange={handleInputChange}
                    placeholder="Digite o endereço de trabalho"
                  />
                  <label>Horário de trabalho</label>
                  <div className="horario-trabalho">
                    <input
                      type="time"
                      name="inicio"
                      value={newColabData.inicio}
                      onChange={handleInputChange}
                    />
                    <span>—</span>
                    <input
                      type="time"
                      name="termino"
                      value={newColabData.termino}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="contato">
                  <h3>Contato</h3>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newColabData.email}
                    onChange={handleInputChange}
                    placeholder="Digite o email do colaborador"
                  />
                  <label>Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={newColabData.telefone}
                    onChange={handleInputChange}
                    placeholder="Digite o telefone do colaborador"
                  />
                </div>
              </div>
              <div className="modal-buttons">
                <button className="criar" onClick={handleCriarColaborador}>
                  CRIAR
                </button>
                <button className="cancelar" onClick={fecharModal}>
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