import elevatorImage from '../img/image 3.png';
import mastonImagem from '../img/clienteMaston.svg';

export const mockData = {
    aprovacao: [
        { id: '001', company: 'Construtora Maston', location: 'São Paulo, SP', lastUpdate: '20/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Ana Silva', imageUrl: mastonImagem },
        { id: '002', company: 'Inovações SA', location: 'Rio de Janeiro, RJ', lastUpdate: '18/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-Y', salesRep: 'Carlos Mendes', imageUrl: elevatorImage },
        { id: '015', company: 'Global Solutions', location: 'Brasília, DF', lastUpdate: '22/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Fernanda Lima', imageUrl: elevatorImage },
        { id: '016', company: 'Centro Empresarial', location: 'Curitiba, PR', lastUpdate: '23/07/2024', status: 'Fora do prazo', statusType: 'late', elevatorModel: 'OTIS-X', salesRep: 'Pedro Almeida', imageUrl: elevatorImage },
        { id: '017', company: 'Alpha Condomínios', location: 'Belo Horizonte, MG', lastUpdate: '21/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Juliana Costa', imageUrl: elevatorImage },
    ],
    obraCivil: [
        { id: '003', company: 'Construtora Build', location: 'Belo Horizonte, MG', lastUpdate: '15/07/2024', status: 'Fora do prazo', statusType: 'late', elevatorModel: 'OTIS-Z', salesRep: 'Juliana Costa', imageUrl: elevatorImage },
        { id: '008', company: 'Horizonte Eng.', location: 'Salvador, BA', lastUpdate: '19/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Lucas Martins', imageUrl: elevatorImage },
        { id: '011', company: 'Vertical Towers', location: 'Fortaleza, CE', lastUpdate: '14/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-Y', salesRep: 'Beatriz Souza', imageUrl: elevatorImage },
        { id: '018', company: 'Solidez Construtora', location: 'Goiânia, GO', lastUpdate: '20/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Ricardo Nunes', imageUrl: elevatorImage },
        { id: '019', company: 'Praça das Fontes', location: 'Recife, PE', lastUpdate: '18/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Ana Silva', imageUrl: elevatorImage },
    ],
    fabricacao: [
        { id: '005', company: 'Edificações Prime', location: 'Porto Alegre, RS', lastUpdate: '21/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Ricardo Nunes', imageUrl: elevatorImage },
        { id: '012', company: 'Mega Construtora', location: 'Manaus, AM', lastUpdate: '23/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Tiago Pereira', imageUrl: elevatorImage },
        { id: '020', company: 'Residencial Jardins', location: 'Campinas, SP', lastUpdate: '22/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-Y', salesRep: 'Carlos Mendes', imageUrl: elevatorImage },
        { id: '021', company: 'Torre Norte', location: 'Belém, PA', lastUpdate: '19/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Fernanda Lima', imageUrl: elevatorImage },
        { id: '022', company: 'Complexo Logístico', location: 'Vitória, ES', lastUpdate: '24/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Lucas Martins', imageUrl: elevatorImage },
    ],
    aCaminho: [
        { id: '004', company: 'Future Towers', location: 'Curitiba, PR', lastUpdate: '19/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Pedro Almeida', imageUrl: elevatorImage },
        { id: '023', company: 'Edifício Central', location: 'São Paulo, SP', lastUpdate: '25/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Beatriz Souza', imageUrl: elevatorImage },
        { id: '024', company: 'Pátio Corporativo', location: 'Rio de Janeiro, RJ', lastUpdate: '23/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Tiago Pereira', imageUrl: elevatorImage },
        { id: '025', company: 'Mirante da Serra', location: 'Belo Horizonte, MG', lastUpdate: '22/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-Z', salesRep: 'Juliana Costa', imageUrl: elevatorImage },
        { id: '026', company: 'Shopping Metrópole', location: 'Salvador, BA', lastUpdate: '21/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Ana Silva', imageUrl: elevatorImage },
    ],
    emInstalacao: [
        { id: '006', company: 'Residencial Top', location: 'Goiânia, GO', lastUpdate: '17/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-X', salesRep: 'Ana Silva', imageUrl: elevatorImage },
        { id: '009', company: 'Skyline Prédios', location: 'Recife, PE', lastUpdate: '13/07/2024', status: 'Fora do prazo', statusType: 'late', elevatorModel: 'OTIS-Z', salesRep: 'Juliana Costa', imageUrl: elevatorImage },
        { id: '014', company: 'Condomínio Central', location: 'Belém, PA', lastUpdate: '20/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Carlos Mendes', imageUrl: elevatorImage },
        { id: '027', company: 'Golden Offices', location: 'Fortaleza, CE', lastUpdate: '18/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Ricardo Nunes', imageUrl: elevatorImage },
        { id: '028', company: 'Blue Tower', location: 'Porto Alegre, RS', lastUpdate: '16/07/2024', status: 'Fora do prazo', statusType: 'late', elevatorModel: 'OTIS-Y', salesRep: 'Pedro Almeida', imageUrl: elevatorImage },
    ],
    testesFinais: [
        { id: '010', company: 'Office Center', location: 'Campinas, SP', lastUpdate: '22/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Pedro Almeida', imageUrl: elevatorImage },
        { id: '029', company: 'Hospital Inova', location: 'Curitiba, PR', lastUpdate: '24/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-MED', salesRep: 'Fernanda Lima', imageUrl: elevatorImage },
        { id: '030', company: 'Green Valley', location: 'Florianópolis, SC', lastUpdate: '23/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Beatriz Souza', imageUrl: elevatorImage },
        { id: '031', company: 'Infinity Tower', location: 'Brasília, DF', lastUpdate: '21/07/2024', status: 'Alerta de prazo', statusType: 'alert', elevatorModel: 'OTIS-Z', salesRep: 'Tiago Pereira', imageUrl: elevatorImage },
        { id: '032', company: 'Resort Paradise', location: 'Manaus, AM', lastUpdate: '20/07/2024', status: 'Dentro do prazo', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Lucas Martins', imageUrl: elevatorImage },
    ],
    concluidos: [
        { id: '007', company: 'Torres Gêmeas', location: 'Florianópolis, SC', lastUpdate: '10/07/2024', status: 'Concluído', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Ricardo Nunes', imageUrl: elevatorImage },
        { id: '013', company: 'Parque da Cidade', location: 'Vitória, ES', lastUpdate: '05/07/2024', status: 'Concluído', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Lucas Martins', imageUrl: elevatorImage },
        { id: '033', company: 'West Plaza', location: 'São Paulo, SP', lastUpdate: '15/06/2024', status: 'Concluído', statusType: 'ontime', elevatorModel: 'OTIS-X', salesRep: 'Ana Silva', imageUrl: elevatorImage },
        { id: '034', company: 'Ocean View', location: 'Rio de Janeiro, RJ', lastUpdate: '12/05/2024', status: 'Concluído', statusType: 'ontime', elevatorModel: 'OTIS-Y', salesRep: 'Carlos Mendes', imageUrl: elevatorImage },
        { id: '035', company: 'Diamond Mall', location: 'Belo Horizonte, MG', lastUpdate: '01/04/2024', status: 'Concluído', statusType: 'ontime', elevatorModel: 'OTIS-Z', salesRep: 'Juliana Costa', imageUrl: elevatorImage },
    ]
};