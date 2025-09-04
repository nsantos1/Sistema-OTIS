import React, { useState } from "react";
import BarraDeFiltros from "../../components/barraDeFiltros/barraDeFiltros";
import CardColaborador from "../../components/cardColaborador/cardColaborador";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import "./colaboradores.css";

export default function Colaboradores() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = () => setIsModalOpen(true);
  const fecharModal = () => setIsModalOpen(false);

  return (
    <main>
      <Sidebar />
      <BarraDeFiltros />
      <div className="conteudo-principal">
        <div className="cabecalho-colaboradores">
          <div className="cabecalho-colaboradores-linha-1">
            <h1>Gestão de colaboradores</h1>
            <hr />
            <button onClick={abrirModal}>NOVO COLABORADOR</button>
          </div>
          <div className="cabecalho-colaboradores-linha-2">
            <ul>
              <li>Total: 128</li>
              <hr />
              <li>Ativos: 98</li>
              <hr />
              <li>Em treinamento: 30</li>
              <hr />
              <li>Inativos: 20</li>
            </ul>
          </div>
        </div>

        <div className="secao-colaboradores">
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
          <CardColaborador
            id={"#FO-303030"}
            nome={"João Ricardo"}
            status={"ativo"}
            cargo={"Operário"}
            setor={"Fábrica"}
            supervisor={"Nicolas Santos"}
          />
        </div>

        <div className="carregar-mais">
          <span>Carregar mais colaboradores</span>
          <img src="src/assets/img/arrow_drop_down.svg" alt="" />
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="fundo-escuro" onClick={fecharModal}></div>

          <div className="modal-conteudo">
            <h2>Novo Colaborador</h2>

            <div className="foto-container">
              <div className="foto-placeholder">
                <img src="src\assets\img\person.svg" alt="" />
              </div>
              <span>Adicionar foto</span>
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
              <button className="criar" onClick={fecharModal}>
                CRIAR
              </button>
              <button className="cancelar" onClick={fecharModal}>
                CANCELAR
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
