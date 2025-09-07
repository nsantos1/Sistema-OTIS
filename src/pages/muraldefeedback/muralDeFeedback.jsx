import React, { useState } from 'react';
import Sidebar from '../../components/menuPrincipalLateral/menuPrincipalLateral';
import BarraDeFiltrosMural from '../../components/barraDeFiltros/barraDeFiltrosMural';
import FeedbackCard from '../../components/mural/feedbackCard';
import { FaPlus } from 'react-icons/fa';
import './muralDeFeedback.css';

const feedbackMockData = [
    { id: 1, authorName: 'João Ricardo', authorRole: 'Supervisor de fábrica', authorAvatar: 'https://i.pravatar.cc/150?u=joao', timestamp: '05/09/2025 - 10:54h', isUrgent: true, message: 'Reunião geral marcada para segunda-feira às 9h, na sala de conferências. Presença obrigatória de todos os colaboradores.', likes: 12, comments: 3 },
    { id: 2, authorName: 'Carla Souza', authorRole: 'Supervisora de fábrica', authorAvatar: 'https://i.pravatar.cc/150?u=carla', timestamp: '04/09/2025 - 14:19h', isUrgent: false, message: 'Parabéns à equipe do turno da manhã! Bateram a meta de produção pelo terceiro mês seguido. Ótimo trabalho!', likes: 45, comments: 12 },
    { id: 3, authorName: 'Pedro Alves', authorRole: 'Supervisor de vendas', authorAvatar: 'https://i.pravatar.cc/150?u=pedro', timestamp: '02/09/2025 - 17:45h', isUrgent: false, message: 'Reajuste nos preços será debatido na reunião de vendas de hoje. Favor revisar os materiais de apoio.', likes: 8, comments: 1 },
    { id: 4, authorName: 'Ricardo Alves', authorRole: 'Supervisor de fábrica', authorAvatar: 'https://i.pravatar.cc/150?u=ricardo', timestamp: '01/09/2025 - 11:24h', isUrgent: false, message: 'Uso obrigatório de capacete e protetor auricular em todas as áreas de produção. Fiscalizações começarão ainda hoje.', likes: 23, comments: 5 },
    { id: 5, authorName: 'Marina Costa', authorRole: 'Gerente de RH', authorAvatar: 'https://i.pravatar.cc/150?u=marina', timestamp: '31/08/2025 - 10:54h', isUrgent: true, message: 'Último prazo para envio das horas extras de setembro: sexta-feira, até as 18h.', likes: 15, comments: 2 },
    { id: 6, authorName: 'Paulo Henrique', authorRole: 'Supervisor de vendas', authorAvatar: 'https://i.pravatar.cc/150?u=paulo', timestamp: '30/08/2025 - 15:41h', isUrgent: true, message: 'Reunião sobre a nova política de comissões na segunda-feira, às 10h, na sala de conferências.', likes: 18, comments: 7 },
    { id: 7, authorName: 'Ana Beatriz', authorRole: 'Gerente de RH', authorAvatar: 'https://i.pravatar.cc/150?u=ana', timestamp: '29/08/2025 - 09:30h', isUrgent: true, message: 'O sistema interno ficará indisponível no sábado das 08h às 12h para manutenção programada.', likes: 5, comments: 0 },
    { id: 8, authorName: 'Lucas Ferreira', authorRole: 'Coordenador de TI', authorAvatar: 'https://i.pravatar.cc/150?u=lucas', timestamp: '28/08/2025 - 16:00h', isUrgent: false, message: 'Calendário de treinamentos do próximo trimestre já disponível na intranet. Inscrevam-se!', likes: 30, comments: 9 },
    { id: 9, authorName: 'Beatriz Lima', authorRole: 'Diretora de Operações', authorAvatar: 'https://i.pravatar.cc/150?u=beatriz', timestamp: '27/08/2025 - 11:00h', isUrgent: false, message: 'Parabéns à equipe de instalação! Recorde batido no tempo de montagem de elevadores neste mês. Vocês são incríveis!', likes: 88, comments: 25 },
    { id: 10, authorName: 'Gustavo Oliveira', authorRole: 'Gerente de Qualidade', authorAvatar: 'https://i.pravatar.cc/150?u=gustavo', timestamp: '26/08/2025 - 14:20h', isUrgent: false, message: 'Redução de 20% no número de não conformidades em setembro. Excelente desempenho de todos os envolvidos.', likes: 42, comments: 11 },
    { id: 11, authorName: 'Fernanda Rocha', authorRole: 'Analista de RH', authorAvatar: 'https://i.pravatar.cc/150?u=fernanda', timestamp: '25/08/2025 - 10:15h', isUrgent: false, message: 'Bem-vindos aos novos colaboradores: Ana Paula, Lucas e Thiago. Sucesso na jornada!', likes: 65, comments: 18 },
    { id: 12, authorName: 'Roberto Almeida', authorRole: 'CEO', authorAvatar: 'https://i.pravatar.cc/150?u=roberto', timestamp: '22/08/2025 - 09:00h', isUrgent: false, message: 'Nossa unidade foi reconhecida internacionalmente pela OTIS global como referência em eficiência operacional. Um marco para todos nós!', likes: 152, comments: 45 },
    { id: 13, authorName: 'Camila Martins', authorRole: 'Coordenador de TI', authorAvatar: 'https://i.pravatar.cc/150?u=camila', timestamp: '21/08/2025 - 18:00h', isUrgent: false, message: 'Atualização importante de segurança será aplicada em todos os sistemas na próxima sexta-feira à noite. Salvem seus trabalhos!', likes: 22, comments: 4 },
    { id: 14, authorName: 'Daniel Costa', authorRole: 'Gerente de Vendas', authorAvatar: 'https://i.pravatar.cc/150?u=daniel', timestamp: '20/08/2025 - 12:30h', isUrgent: false, message: 'Nova campanha de incentivo de vendas começa hoje! O prêmio para o melhor vendedor do trimestre será uma viagem internacional.', likes: 78, comments: 29 },
    { id: 15, authorName: 'Sofia Pereira', authorRole: 'Analista de RH', authorAvatar: 'https://i.pravatar.cc/150?u=sofia', timestamp: '19/08/2025 - 16:45h', isUrgent: false, message: 'Lembrete: treinamento obrigatório de segurança no trabalho para a equipe da fábrica na próxima quarta-feira, às 8h.', likes: 19, comments: 3 },
    { id: 16, authorName: 'Marcos Andrade', authorRole: 'Supervisor de fábrica', authorAvatar: 'https://i.pravatar.cc/150?u=marcos', timestamp: '18/08/2025 - 08:20h', isUrgent: false, message: 'A manutenção preventiva da prensa 3 está agendada para amanhã. A área ficará isolada durante o procedimento.', likes: 11, comments: 1 },
    { id: 17, authorName: 'Juliana Ribeiro', authorRole: 'Gerente de Engenharia', authorAvatar: 'https://i.pravatar.cc/150?u=juliana', timestamp: '15/08/2025 - 17:10h', isUrgent: true, message: 'Atenção, equipe do Projeto Delta: o prazo final para a entrega dos relatórios foi antecipado para 20/08. Foco total!', likes: 25, comments: 10 },
    { id: 18, authorName: 'Thiago Nunes', authorRole: 'Marketing', authorAvatar: 'https://i.pravatar.cc/150?u=thiago', timestamp: '14/08/2025 - 11:50h', isUrgent: false, message: 'Lançamos hoje nossa nova campanha de marketing nas redes sociais! Confiram e compartilhem o vídeo institucional.', likes: 55, comments: 15 },
    { id: 19, authorName: 'Marina Costa', authorRole: 'Gerente de RH', authorAvatar: 'https://i.pravatar.cc/150?u=marina', timestamp: '12/08/2025 - 10:00h', isUrgent: false, message: 'O calendário de feriados do final do ano já foi definido e está disponível na intranet para consulta.', likes: 34, comments: 6 },
    { id: 20, authorName: 'Gustavo Oliveira', authorRole: 'Gerente de Qualidade', authorAvatar: 'https://i.pravatar.cc/150?u=gustavo', timestamp: '11/08/2025 - 15:00h', isUrgent: false, message: 'Recebemos um feedback incrível do cliente Construtora Build sobre a performance dos nossos novos elevadores. Parabéns a todos!', likes: 62, comments: 22 },
    { id: 21, authorName: 'Pedro Alves', authorRole: 'Supervisor de vendas', authorAvatar: 'https://i.pravatar.cc/150?u=pedro', timestamp: '08/08/2025 - 13:00h', isUrgent: true, message: 'Reta final do trimestre, equipe de vendas! Vamos com tudo para batermos nossa meta. Conto com o esforço de cada um!', likes: 48, comments: 17 },
    { id: 22, authorName: 'Fernanda Rocha', authorRole: 'Analista de RH', authorAvatar: 'https://i.pravatar.cc/150?u=fernanda', timestamp: '05/08/2025 - 14:30h', isUrgent: false, message: 'Save the date! Nossa festa anual de confraternização será no dia 12/12. Mais detalhes em breve!', likes: 120, comments: 50 },
    { id: 23, authorName: 'Lucas Ferreira', authorRole: 'Coordenador de TI', authorAvatar: 'https://i.pravatar.cc/150?u=lucas', timestamp: '01/08/2025 - 09:00h', isUrgent: true, message: 'ALERTA: Identificamos uma nova tentativa de phishing. Não cliquem em links suspeitos e reportem qualquer e-mail estranho imediatamente.', likes: 38, comments: 13 },
];


function MuralDeFeedback() {
    const [filters, setFilters] = useState({
        authorName: '',
        message: '',
        setor: [],
        isUrgent: 'todos',
        isRead: 'todos'
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [readStatus, setReadStatus] = useState({});

    const handleToggleRead = (id) => {
        setReadStatus(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredFeedbacks = feedbackMockData.filter(item => {
        const authorMatch = filters.authorName ? item.authorName.toLowerCase().includes(filters.authorName.toLowerCase()) : true;
        const messageMatch = filters.message ? item.message.toLowerCase().includes(filters.message.toLowerCase()) : true;
        const setorMatch = filters.setor && filters.setor.length > 0 ? filters.setor.some(s => item.authorRole.toLowerCase().includes(s.toLowerCase())) : true;
        const urgentMatch = filters.isUrgent === 'sim' ? item.isUrgent : filters.isUrgent === 'nao' ? !item.isUrgent : true;
        const readMatch = filters.isRead === 'sim' ? readStatus[item.id] : filters.isRead === 'nao' ? !readStatus[item.id] : true;

        return authorMatch && messageMatch && setorMatch && urgentMatch && readMatch;
    });

    return (
        <main className="main-mural">
            <Sidebar />
            <div className="mural-container">
                <BarraDeFiltrosMural filters={filters} onFilterChange={setFilters} />
                <div className="mural-content">
                    <header className="mural-header">
                        <div>
                            <h1>Mural de Comunicações</h1>
                            <p>Espaço para comunicados, avisos e feedbacks</p>
                        </div>
                        <button className="novo-aviso-btn" onClick={() => setIsModalOpen(true)}>
                            <FaPlus />
                            NOVO AVISO
                        </button>
                    </header>
                    <div className="feedback-grid">
                        {filteredFeedbacks.map(feedback => (
                            <FeedbackCard 
                                key={feedback.id} 
                                {...feedback} 
                                isRead={!!readStatus[feedback.id]}
                                onToggleRead={() => handleToggleRead(feedback.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                 <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2>Novo Comunicado</h2>
                            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body">
                           <textarea placeholder="Digite sua mensagem aqui..."></textarea>
                           <div className="modal-options">
                               <label><input type="checkbox" /> Marcar como urgente</label>
                               <select>
                                   <option>Visível para: Todos</option>
                                   <option>Visível para: Vendas</option>
                                   <option>Visível para: Fábrica</option>
                                   <option>Visível para: RH</option>
                                   <option>Visível para: Engenharia</option>
                               </select>
                           </div>
                        </div>
                        <div className="modal-footer">
                            <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>CANCELAR</button>
                            <button className="submit-btn">PUBLICAR</button>
                        </div>
                    </div>
                 </div>
            )}

        </main>
    );
}

export default MuralDeFeedback;