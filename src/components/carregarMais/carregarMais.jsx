// CarregarMais.jsx
import "./carregarMais.css";
export default function CarregarMais({ item, btFunc }) { // Adiciona btFunc
  return (
    <div className="carregar-mais" onClick={btFunc}>
      <span>Carregar mais {item}</span>
      <img src="src/assets/img/arrow_drop_down.svg" alt="" />
    </div>
  );
}