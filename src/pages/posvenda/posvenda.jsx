import { useState, useEffect } from 'react';

import BarraDeFiltrosPosVenda from '../../components/barraDeFiltros/barraDeFiltrosPosVenda.jsx'
import Slider from '../../components/slider/slider.jsx'

import './posvenda.css'
import Sidebar from '../../components/menuPrincipalLateral/menuPrincipalLateral.jsx';

const mockData = {
    manutencao: [
        { id: 'CT-0921', salesRep: 'João Ricardo', company: 'Construtora Maston', local: "São Paulo/SP", data: "27/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0922', salesRep: 'Nicolas Santos', company: 'Construtora Salos', local: "Macaé/RJ", data: "29/08/2025", estado: "em-aberto", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0923', salesRep: 'Eduardo Vicentini', company: 'Construtora Levy', local: "São Paulo/SP", data: "27/08/2025", estado: "resolvido", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0924', salesRep: 'Eduardo Bielecky', company: 'Construtora Milho', local: "Salvador/BA", data: "16/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0925', salesRep: 'Caio Ribeiro', company: 'Construtora Silk', local: "Volta Redonda/RJ", data: "24/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},         
    ],
    suporte: [
        { id: 'CT-0926', salesRep: 'Eduardo Bielecky', company: 'Construtora Milho', local: "Salvador/BA", data: "16/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0927', salesRep: 'Eduardo Vicentini', company: 'Construtora Levy', local: "São Paulo/SP", data: "27/08/2025", estado: "resolvido", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0928', salesRep: 'Caio Ribeiro', company: 'Construtora Silk', local: "Volta Redonda/RJ", data: "24/08/2025", estado: "em-atendimento", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},         
        { id: 'CT-0929', salesRep: 'João Ricardo', company: 'Construtora Maston', local: "São Paulo/SP", data: "27/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0930', salesRep: 'Nicolas Santos', company: 'Construtora Salos', local: "Macaé/RJ", data: "29/08/2025", estado: "em-aberto", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
    ],
    avaliacao: [
        { id: 'CT-0931', salesRep: 'Gui Negão', company: 'Construtora Kuro', local: "Curitiba/PR", data: "29/08/2025", estado: "em-aberto", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0932', salesRep: 'Caio Ribeiro', company: 'Construtora Silk', local: "Volta Redonda/RJ", data: "24/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},         
        { id: 'CT-0933', salesRep: 'Eduardo Bielecky', company: 'Construtora Milho', local: "Salvador/BA", data: "16/08/2025", estado: "em-atendimento", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0934', salesRep: 'João Ricardo', company: 'Construtora Maston', local: "São Paulo/SP", data: "27/08/2025", estado: "em-aberto-mais", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0935', salesRep: 'Eduardo Vicentini', company: 'Construtora Levy', local: "São Paulo/SP", data: "27/08/2025", estado: "resolvido", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
        { id: 'CT-0936', salesRep: 'Nicolas Santos', company: 'Construtora Salos', local: "Macaé/RJ", data: "29/08/2025", estado: "em-aberto", titulo: "Elevador Travando no 2º andar", relato: "Cliente relatava travamento intermitente após horário de pico."},
    ],
};

function PosVenda() {
    const [filters, setFilters] = useState({
        id: '',
        company: '',
        local: '',
        titulo: '',
        salesRep: '',
        startDate: '',
        endDate: '',
        tipoDeChamado: [],
        estado: [],
    });

    const [filteredData, setFilteredData] = useState(mockData);

    useEffect(() => {
        let data = { ...mockData };

        if (filters.tipoDeChamado.length > 0) {
            data = filters.tipoDeChamado.reduce((obj, key) => {
                if (mockData[key]) {
                    obj[key] = mockData[key];
                }
                return obj;
            }, {});
        }

        Object.keys(data).forEach(tipoDeChamado => {
            let tipoDeChamadoData = data[tipoDeChamado];

            if (filters.id) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => item.id.toLowerCase().includes(filters.id.toLowerCase()));
            }
            if (filters.company) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => item.company.toLowerCase().includes(filters.company.toLowerCase()));
            }
            if (filters.local) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => item.local.toLowerCase().includes(filters.local.toLowerCase()));
            }
            if (filters.titulo) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => item.titulo.toLowerCase().includes(filters.titulo.toLowerCase()));
            }
            if (filters.salesRep) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => item.salesRep.toLowerCase().includes(filters.salesRep.toLowerCase()));
            }
            if (filters.estado.length > 0) {
                tipoDeChamadoData = tipoDeChamadoData.filter(item => filters.estado.includes(item.estado))
            }

            data[tipoDeChamado] = tipoDeChamadoData;
        });

        setFilteredData(data);
    }, [filters]);

    const titulo = {
        manutencao: "Manutenção",
        suporte: "Suporte",
        avaliacao: "Avaliação",
    }

    return (
        <main className='main-posvenda'>
            <Sidebar />
            <BarraDeFiltrosPosVenda filters={filters} onFilterChange={setFilters}/>
            <div className='main-posvenda-conteudo'>
            <div className='legenda'>
                <div className='estado-do-chamado'>
                    <div className='bolinha em-aberto'></div>
                    <div className='tipo'>
                        <strong>Em aberto</strong>
                        <span>Menos de 1 dia</span>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha em-aberto-mais'></div>
                    <div className='tipo'>
                        <strong>Em aberto</strong>
                        <span>Mais de 1 dia</span>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha em-atendimento'></div>
                    <div className='tipo'>
                        <strong>Em atendimento</strong>
                    </div>
                </div>

                <div className='estado-do-chamado'>
                    <div className='bolinha resolvido'></div>
                    <div className='tipo'>
                        <strong>Resolvido</strong>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='conteudo-posvenda'>
                    {Object.keys(filteredData).map(tipo =>
                        filteredData[tipo].length > 0 && (
                            <Slider 
                                key={tipo}
                                tituloTipoDeChamado={titulo[tipo]}
                                slides={filteredData[tipo]}
                            />
                        )
                    )}
                </div>
            </div>
            </div>
        </main>
    )
}

export default PosVenda