import "./barraDeFiltros.css";
import { FiltroAlternativo, FiltroDissertativo } from "./filtro/filtro";

export default function BarraDeFiltros() {
  return (
    <div className="filtros-container">
      <div className="conteudo-filtro">
        <FiltroDissertativo
          tituloDissertativo={"ID do colaborador"}
          placeholder={"Digite o ID do colaborador desejado"}
        />
        <FiltroDissertativo
          tituloDissertativo={"Nome do colaborador"}
          placeholder={"Digite o nome do colaborador desejado"}
        />
        <FiltroDissertativo
          tituloDissertativo={"Nome do supervisor"}
          placeholder={"Digite o nome do supervisor do colaborador desejado"}
        />
        <FiltroAlternativo tituloAlternativo={"Cargo"} />
        <FiltroAlternativo tituloAlternativo={"Setor"} />
      </div>
    </div>
  );
}
