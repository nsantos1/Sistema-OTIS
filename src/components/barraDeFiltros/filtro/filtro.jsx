import "./filtro.css";

export function FiltroDissertativo({ tituloDissertativo, placeholder }) {
  return (
    <div className="filtro-dissertativo">
      <label>{tituloDissertativo}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export function FiltroAlternativo({ tituloAlternativo }) {
  return (
    <div className="filtro-alternativo">
      <label className="titulo">{tituloAlternativo}</label>

      <label className="alternativas">
        <input type="checkbox" value="operario" />
        Operário
      </label>

      <label className="alternativas">
        <input type="checkbox" value="engenheiro" />
        Engenheiro
      </label>

      <label className="alternativas">
        <input type="checkbox" value="supervisor" />
        Supervisor
      </label>

      <label className="alternativas">
        <input type="checkbox" value="gerente" />
        Gerente
      </label>
    </div>
  );
}
