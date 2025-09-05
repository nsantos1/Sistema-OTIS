import "./carregarMais.css";

export default function CarregarMais({ item }) {
  return (
    <div className="carregar-mais">
      <span>Carregar mais {item}</span>
      <img src="src/assets/img/arrow_drop_down.svg" alt="" />
    </div>
  );
}
