import React from "react";
import "../informacaoDoContrato/informacaoDoContrato.css";
import ClienteMaston from '../../assets/imagens/clienteMaston.svg';
import Elevador from '../../assets/imagens/elevador.svg';

export default function InformacaoDoContrato() {
  return (
    <div className="info-contrato">
      <h3>INFORMAÇÕES DO CONTRATO</h3>

      {/* Grid principal */}
      <div className="info-grid">
        {/* Bloco 1 - Informações do contrato */}
        <div className="info-texto">
          <p><strong>ID</strong><br />#CT-0921</p>
          <p><strong>Cliente</strong><br />Construtora Maston</p>
          <p><strong>Resp. comercial</strong><br />João Ricardo S. O. Coto</p>
          <p><strong>Endereço da obra civil</strong><br />Av. Paulista, 1106 - Bela Vista, SP</p>
          <p><strong>Data de assinatura</strong><br />28/08/2025</p>
        </div>

        {/* Bloco 2 - Logo + modelo */}
        <div className="info-coluna">
          <div className="info-box verde">
            <img src={ClienteMaston} alt="Logo/Imagem do cliente" />
          </div>
          <div className="info-extra">
            <p><strong>Modelo de elevador</strong> Gen2® Comfort Panorâmico</p>
            <p><strong>Número de paradas</strong> 15 Paradas</p>
            <p><strong>Comprimento do percurso</strong> 60 metros</p>
          </div>
        </div>

        {/* Bloco 3 - Elevador + opcionais */}
        <div className="info-coluna">
          <div className="info-box cinza">
            <img src={Elevador} alt="Imagem Elevador" />
          </div>
          <div className="info-extra">
            <p><strong>Opcionais do modelo</strong> Acabamentos e Materiais</p>
            <p>Teto com iluminação indireta em LED</p>
            <p><strong>Iluminação e Atmosfera</strong> Espelhos de corpo inteiro</p>
          </div>
        </div>
      </div>

      {/* Linha de etapas */}
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
