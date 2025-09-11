import './cabecalhoSecoes.css'

export default function CabecalhoSecoes({ titulo }) {
  return (
    <div className="cabecalho-secao">
      <h1>{titulo}</h1>
      <hr />
      <button className="ver-todos-btn">Ver todos</button>
    </div>
  );
}
