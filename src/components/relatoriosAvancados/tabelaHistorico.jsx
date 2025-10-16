import React from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import './tabelaHistorico.css';

// Função para formatar a data
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export default function TabelaHistorico({ history, onSelectReport, onDeleteReport }) {
    if (!history || history.length === 0) {
        return (
            <div className="history-table-container">
                <div className="empty-history">
                    <p>Nenhum relatório foi gerado ainda. Comece a criar relatórios para vê-los aqui.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="history-table-container">
            <h2 className="history-table-title">Histórico de Relatórios Gerados</h2>
            <div className="table-wrapper">
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Data de Criação</th>
                            <th>Solicitação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id}>
                                <td>{formatDate(item.id)}</td>
                                <td>{item.prompt}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button 
                                            className="action-button view" 
                                            onClick={() => onSelectReport(item)}
                                            title="Visualizar Relatório"
                                        >
                                            <FaEye />
                                            Visualizar
                                        </button>
                                        <button 
                                            className="action-button delete" 
                                            onClick={() => onDeleteReport(item.id)}
                                            title="Excluir Relatório"
                                        >
                                            <FaTrash />
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
