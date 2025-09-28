import "./cabecalhoSecoes.css";

export default function CabecalhoSecoes({
  titulo,
  onViewAll,
  isViewingAll,
}) {
  return (
    <div className="cabecalho-secao">
      <h1>{titulo}</h1>
      <hr />
      <button className="ver-todos-btn" onClick={onViewAll}>
        {isViewingAll ? "Ver menos" : "Ver todos"}
      </button>
    </div>
  );
}