import React from "react";
import "./informacaoDoContrato.css";
import Elevador from '../../../assets/img/elevador.svg';

export default function InformacaoDoContrato({ contract }) {
  return (
    <div className="info-contrato">
      <h3>INFORMAÇÕES DO CONTRATO</h3>
      <div className="info-grid">
        <div className="info-texto">
          <p><strong>ID</strong><br />#{contract.id}</p>
          <p><strong>Cliente</strong><br />{contract.company}</p>
          <p><strong>Resp. comercial</strong><br />{contract.salesRep}</p>
          <p><strong>Endereço da obra civil</strong><br />{contract.location}</p>
          <p><strong>Última atualização</strong><br />{contract.lastUpdate}</p>
        </div>

        <div className="info-coluna">
          <div className="info-box-logo-otis"> 
            OTIS 
          </div>
          <div className="info-extra">
            <p><strong>Modelo de elevador</strong> {contract.elevatorModel}</p>
          </div>
        </div>

        <div className="info-coluna">
          <div className="info-box cinza">
            <img src={Elevador} alt="Imagem do Elevador" />
          </div>
          <div className="info-extra">
          </div>
        </div>
      </div>

      <div className="etapas">
        <h4>Etapas</h4>
        <div className="timeline">
          <div className="step completed">Aprovação do contrato</div>
          <div className="step completed">Data prévia da obra civil</div>
          <div className="step completed">Fabricação</div>
          <div className="step">A caminho</div>
          <div className="step">Instalação</div>
          <div className="step">Testes finais</div>
          <div className="step">Concluído</div>
        </div>
      </div>
    </div>
  );
}