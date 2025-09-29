import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./cabecalhoSecoes.css";

export default function CabecalhoSecoes({
    titulo,
    onViewAll,
    isViewingAll,
    scroll,
}) {
    return (
        <header className="section-header">
            <h2>{titulo}</h2>
            <hr />
            <div className="section-actions">
                <button className="ver-todos-btn" onClick={onViewAll}>
                    {isViewingAll ? "Ver menos" : "Ver todos"}
                </button>
                <div className="scroll-buttons">
                    <button onClick={() => scroll(-335)}><FaChevronLeft /></button>
                    <button onClick={() => scroll(335)}><FaChevronRight /></button>
                </div>
            </div>
        </header>
    );
}