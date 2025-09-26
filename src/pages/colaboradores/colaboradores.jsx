// Colaboradores.jsx - Lógica completa (Limitador de 12 itens, Carregar Mais, No Results)
import { useState, useRef } from "react"; // IMPORTADO: useRef
import CardColaborador from "../../components/colaboradores/cardColaborador/cardColaborador";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import "./colaboradores.css";
import CarregarMais from "../../components/carregarMais/carregarMais";
import CabecalhoColaboradores from "../../components/colaboradores/cabecalhoColaboradores/cabecalhoColaboradores";
import BarraDeFiltrosColaboradores from "../../components/barraDeFiltros/barraDeFiltrosColaboradores";
import { colaboradoresData } from "../../assets/data/colaboradoresData";

// Define quantos colaboradores exibir por vez (3 linhas * 4 colunas = 12)
const ITEMS_PER_LOAD = 12;

export default function Colaboradores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para controlar a quantidade de itens a mostrar (começa com 12)
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_LOAD);
  
  // NOVO: Estado para armazenar o URL da imagem de pré-visualização
  const [newColabImage, setNewColabImage] = useState(null); 
  // NOVO: Referência para o input de arquivo oculto
  const fileInputRef = useRef(null); 
  
  const [filters, setFilters] = useState({
    nome: "",
    cargo: [],
    setor: [],
    status: "todos",
  });
  
  const abrirModal = () => {
    setIsModalOpen(true);
    setNewColabImage(null); // Limpa a imagem ao abrir
  };
  
  const fecharModal = () => {
    setIsModalOpen(false);
    setNewColabImage(null); // Limpa a imagem ao fechar
  };
  
  // NOVO: Função para lidar com a seleção de imagem
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Cria um URL temporário para pré-visualização e armazena no estado
      setNewColabImage(URL.createObjectURL(file));
      // NOTA: O arquivo real (file) está em event.target.files[0] 
      // e deve ser enviado para o backend na função handleCriarColaborador.
    }
  };

  // NOVO: Função para disparar o clique no input file oculto
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Função para criar colaborador (simulada)
  const handleCriarColaborador = () => {
      // Aqui entraria a lógica de envio para o Backend ou atualização global do estado.
      console.log("Novo colaborador criado com sucesso!");
      fecharModal();
      setItemsToShow(ITEMS_PER_LOAD); 
  };
  
  // Função para carregar mais (incrementa 12)
  const handleCarregarMais = () => {
    setItemsToShow(prev => prev + ITEMS_PER_LOAD);
  };

  const filteredColaboradores = colaboradoresData.filter((colaborador) => {
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

  // Lista de colaboradores a ser exibida (fatiada)
  const displayedColaboradores = filteredColaboradores.slice(0, itemsToShow);
  
  // Verifica se o botão "Carregar Mais" deve ser exibido 
  const showCarregarMais = itemsToShow < filteredColaboradores.length;

  // Verifica se a lista está vazia
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
            totalColaboradores={colaboradoresData.length}
            colaboradoresAtivos={
              colaboradoresData.filter((c) => c.status === "ativo").length
            }
            colaboradoresTreinamento={
              colaboradoresData.filter((c) => c.status === "em treinamento")
              .length
            }
            colaboradoresInativos={
              colaboradoresData.filter((c) => c.status === "inativo").length
            }
          />

          <div className="secao-colaboradores">
            {/* Renderiza a mensagem de 'Nenhum item encontrado' */}
            {noResults ? (
                <div className="no-results-message">
                    <h2>Nenhum colaborador encontrado!</h2>
                    <p>Tente ajustar seus filtros ou cadastre um novo colaborador.</p>
                </div>
            ) : (
                 // Mapeia apenas os colaboradores a serem exibidos (máximo de 12 por vez)
                displayedColaboradores.map((colaborador) => (
                  <CardColaborador key={colaborador.id} {...colaborador} />
                ))
            )}
          </div>

          {/* Renderiza CarregarMais apenas se houver mais itens e houver resultados */}
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
                {/* NOVO: INPUT FILE OCULTO */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                  accept="image/*"
                />
                
                <div className="foto-placeholder">
                  {/* NOVO: Usa a imagem de preview (newColabImage) ou a imagem padrão */}
                  <img 
                    src={newColabImage || "../src/assets/img/person.svg"} 
                    alt="Foto do Colaborador" 
                  />
                </div>
                {/* NOVO: Elemento clicável que dispara o clique no input file oculto */}
                <span onClick={handleUploadClick}>Adicionar foto</span>
              </div>
              
              <div className="modal-form">
                <div className="dados-gerais">
                  <h3>Dados gerais</h3>
                  <label>Nome</label>
                  <input type="text" placeholder="Digite o nome completo" />
                  <label>Cargo</label>
                  <select>
                    <option>-</option>
                    <option>Engenheiro</option>
                    <option>Supervisor</option>
                    <option>Gerente</option>
                  </select>
                  <h3>Trabalho</h3>
                  <label>Setor</label>
                  <select>
                    <option>-</option>
                    <option>Vendas</option>
                    <option>RH</option>
                    <option>Engenharia</option>
                  </select>
                  <label>Local de trabalho</label>
                  <input
                    type="text"
                    placeholder="Digite o endereço de trabalho"
                  />
                  <label>Horário de trabalho</label>
                  <div className="horario-trabalho">
                    <input type="time" placeholder="Início" />
                    <span>—</span>
                    <input type="time" placeholder="Término" />
                  </div>
                </div>
                <div className="contato">
                  <h3>Contato</h3>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Digite o email do colaborador"
                  />
                  <label>Telefone</label>
                  <input
                    type="tel"
                    placeholder="Digite o telefone do colaborador"
                  />
                </div>
              </div>
              <div className="modal-buttons">
                {/* Chama a função de criação */}
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