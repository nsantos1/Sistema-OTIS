import { FaHardHat, FaShoppingCart, FaUsers } from 'react-icons/fa';

export const vendasData = {
  pedidos: [
    { 
      id: '#PD-84321', 
      status: 'Pendente', 
      statusType: 'pendente',
      cliente: 'Construtora Maston', 
      ultimaAtualizacao: '03/04/2025', 
      responsavel: { nome: 'João Ricardo', inicial: 'J' }, 
      data: '27/08/2025', 
      local: 'São Paulo/SP' 
    },
    { 
      id: '#PD-84322', 
      status: 'Aprovado', 
      statusType: 'aprovado',
      cliente: 'Inovações SA', 
      ultimaAtualizacao: '05/04/2025', 
      responsavel: { nome: 'Maria Silva', inicial: 'M' }, 
      data: '28/08/2025', 
      local: 'Rio de Janeiro/RJ' 
    },
    { 
      id: '#PD-84323', 
      status: 'Em Análise', 
      statusType: 'analise',
      cliente: 'Future Towers', 
      ultimaAtualizacao: '06/04/2025', 
      responsavel: { nome: 'Carlos Mendes', inicial: 'C' }, 
      data: '29/08/2025', 
      local: 'Curitiba, PR' 
    },
    { 
      id: '#PD-84324', 
      status: 'Pendente', 
      statusType: 'pendente',
      cliente: 'Tech Corp', 
      ultimaAtualizacao: '07/04/2025', 
      responsavel: { nome: 'Fernanda Lima', inicial: 'F' }, 
      data: '30/08/2025', 
      local: 'São Paulo, SP' 
    }
  ],
  contratos: [
    {
      id: '#CT-0921',
      status: 'Dentro do prazo',
      statusType: 'ontime',
      cliente: 'Construtora Maston',
      local: 'São Paulo/SP - BR',
      modelo: 'Gen2® Comfort Panorâmico',
      ultimaAtualizacao: '27/08/2025',
      responsavel: { nome: 'João Ricardo', inicial: 'J' },
      imagemUrl: '/src/assets/img/image 3.png'
    },
    {
      id: '#CT-0922',
      status: 'Alerta de prazo',
      statusType: 'alert',
      cliente: 'Inovações SA',
      local: 'Rio de Janeiro/RJ - BR',
      modelo: 'OTIS-Y',
      ultimaAtualizacao: '28/08/2025',
      responsavel: { nome: 'Maria Silva', inicial: 'M' },
      imagemUrl: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '#CT-0923',
      status: 'Fora do prazo',
      statusType: 'late',
      cliente: 'Future Towers',
      local: 'Curitiba, PR - BR',
      modelo: 'OTIS-Z',
      ultimaAtualizacao: '29/08/2025',
      responsavel: { nome: 'Carlos Mendes', inicial: 'C' },
      imagemUrl: 'https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '#CT-0924',
      status: 'Dentro do prazo',
      statusType: 'ontime',
      cliente: 'Tech Corp',
      local: 'São Paulo, SP - BR',
      modelo: 'OTIS-X',
      ultimaAtualizacao: '30/08/2025',
      responsavel: { nome: 'Fernanda Lima', inicial: 'F' },
      imagemUrl: 'https://images.pexels.com/photos/2440134/pexels-photo-2440134.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  clientes: [
    { 
      id: '#CL-78901', 
      nome: 'Construtora Maston', 
      desde: '27/08/2025', 
      local: 'São Paulo/SP',
      stats: [
        { icon: FaShoppingCart, valor: '12', label: 'Pedidos' },
        { icon: FaHardHat, valor: '8', label: 'Instalações' },
        { icon: FaUsers, valor: '5', label: 'Contratos' },
      ]
    },
    { 
      id: '#CL-78902', 
      nome: 'Inovações SA', 
      desde: '15/03/2024', 
      local: 'Rio de Janeiro/RJ',
      stats: [
        { icon: FaShoppingCart, valor: '8', label: 'Pedidos' },
        { icon: FaHardHat, valor: '5', label: 'Instalações' },
        { icon: FaUsers, valor: '3', label: 'Contratos' },
      ]
    },
    { 
      id: '#CL-78903', 
      nome: 'Future Towers', 
      desde: '10/11/2023', 
      local: 'Curitiba/PR',
      stats: [
        { icon: FaShoppingCart, valor: '15', label: 'Pedidos' },
        { icon: FaHardHat, valor: '10', label: 'Instalações' },
        { icon: FaUsers, valor: '7', label: 'Contratos' },
      ]
    },
    { 
      id: '#CL-78904', 
      nome: 'Tech Corp', 
      desde: '01/02/2022', 
      local: 'São Paulo/SP',
      stats: [
        { icon: FaShoppingCart, valor: '25', label: 'Pedidos' },
        { icon: FaHardHat, valor: '20', label: 'Instalações' },
        { icon: FaUsers, valor: '15', label: 'Contratos' },
      ]
    }
  ]
};