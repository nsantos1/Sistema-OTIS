import "./colaboradorHeader.css";
import FotoPerfil from "../../../assets/img/colaborador.svg";

export default function ColaboradorHeader() {
  return (
    <div className="colab-header">
      {/* Parte esquerda: foto + infos */}
      <div className="colab-info">
        <img
          src={FotoPerfil}
          alt="Foto do colaborador"
          className="colab-foto"
        />
        <div className="colab-dados">
          <span className="colab-id">Colaborador #FO-303030</span>
          <h2 className="colab-nome">João Ricardo S. O. Coto</h2>
          <p className="cargo">Operário</p>
          <p className="setor">Fábrica</p>
        </div>
      </div>

      {/* Parte direita: ações */}
      <div className="colab-acoes">
        <button className="btn editar">EDITAR COLABORADOR</button>
        <button className="btn excluir">EXCLUIR COLABORADOR</button>
      </div>
    </div>
  );
}
