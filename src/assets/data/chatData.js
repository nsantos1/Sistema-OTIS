export const chatData = {
  
  currentUser: {
    id: 'user_0',
    name: 'Você'
  },
  
  conversations: [
    {
      id: 'convo_1',
      participant: {
        id: 'user_1',
        name: 'João Ricardo',
        avatar: 'https://i.pravatar.cc/150?u=joao',
        jobTitle: 'Engenheiro de Campo' 
      },
      isFavorite: true,
      messages: [
        { id: 'msg_1', senderId: 'user_1', text: 'Bom dia! Alguma novidade sobre o contrato 035?', timestamp: '10:30' },
        { id: 'msg_2', senderId: 'user_0', text: 'Bom dia, João. O cliente já assinou, estou apenas aguardando o upload no sistema.', timestamp: '10:31' },
        { id: 'msg_3', senderId: 'user_1', text: 'Perfeito, obrigado! Me avise assim que subir.', timestamp: '10:32' },
      ]
    },
    {
      id: 'convo_2',
      participant: {
        id: 'user_2',
        name: 'Maria Silva',
        avatar: 'https://i.pravatar.cc/150?u=maria',
        jobTitle: 'Analista de Vendas' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_4', senderId: 'user_2', text: 'Oi! Pode me ajudar com o relatório de vendas do último trimestre? O sistema parece estar fora para mim.', timestamp: 'Ontem' },
        { id: 'msg_5', senderId: 'user_0', text: 'Claro, Maria. Acabei de gerar aqui. Te envio por e-mail em 5 minutos.', timestamp: 'Ontem' },
      ]
    },
    {
      id: 'convo_3',
      participant: {
        id: 'user_3',
        name: 'Carlos Mendes',
        avatar: 'https://i.pravatar.cc/150?u=carlos',
        jobTitle: 'Gerente de Projetos' 
      },
      isFavorite: true,
      messages: [
        { id: 'msg_6', senderId: 'user_0', text: 'Carlos, a apresentação para a Tech Corp está pronta. Quer dar uma olhada antes de eu enviar para a diretoria?', timestamp: 'Terça' },
        { id: 'msg_7', senderId: 'user_3', text: 'Opa, quero sim. Pode compartilhar o link?', timestamp: 'Terça' },
      ]
    },
    {
      id: 'convo_4',
      participant: {
        id: 'user_4',
        name: 'Fernanda Lima',
        avatar: 'https://i.pravatar.cc/150?u=fernanda',
        jobTitle: 'Coordenadora de RH' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_8', senderId: 'user_4', text: 'Equipe, lembrando a todos da nossa reunião de alinhamento semanal às 14h. Não se atrasem!', timestamp: '11:15' },
      ]
    },
    {
      id: 'convo_5',
      participant: {
        id: 'user_5',
        name: 'Lucas Martins',
        avatar: 'https://i.pravatar.cc/150?u=lucas',
        jobTitle: 'Técnico Especializado' 
      },
      isFavorite: true,
      messages: [
        { id: 'msg_9', senderId: 'user_5', text: 'Você sabe quem é o responsável pelo projeto do Shopping Metrópole? Preciso de uma informação técnica sobre o modelo OTIS-Y.', timestamp: '09:45' },
        { id: 'msg_10', senderId: 'user_0', text: 'Oi Lucas, é a Beatriz Souza. Mas ela está de férias esta semana. Posso tentar ajudar, qual a dúvida?', timestamp: '09:47' },
        { id: 'msg_11', senderId: 'user_5', text: 'Ah, entendi. É sobre a capacidade de carga máxima em picos de uso. Vou verificar o manual primeiro, qualquer coisa te chamo. Obrigado!', timestamp: '09:48' },
      ]
    },
    {
      id: 'convo_6',
      participant: {
        id: 'user_6',
        name: 'Beatriz Souza',
        avatar: 'https://i.pravatar.cc/150?u=beatriz',
        jobTitle: 'Especialista de Produto' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_12', senderId: 'user_6', text: 'Alguém tem o contato do fornecedor de peças para o modelo OTIS-MED? O meu sumiu.', timestamp: 'Segunda' },
      ]
    },
    {
      id: 'convo_7',
      participant: {
        id: 'user_7',
        name: 'Tiago Pereira',
        avatar: 'https://i.pravatar.cc/150?u=tiago',
        jobTitle: 'Líder de Instalação' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_13', senderId: 'user_7', text: 'A instalação no cliente "Resort Paradise" foi concluída com sucesso. O cliente ficou muito satisfeito!', timestamp: '15:21' },
        { id: 'msg_14', senderId: 'user_0', text: 'Excelente notícia, Tiago! 🎉 Parabéns a toda a equipe envolvida.', timestamp: '15:25' },
      ]
    },
    {
      id: 'convo_8',
      participant: {
        id: 'user_8',
        name: 'Juliana Costa',
        avatar: 'https://i.pravatar.cc/150?u=juliana',
        jobTitle: 'Analista de Contratos' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_15', senderId: 'user_8', text: 'Estou com um problema no contrato 028 (Blue Tower), o prazo da obra civil está estourado e o cliente está preocupado. Quem pode me ajudar a alinhar uma nova data?', timestamp: '14:00' },
      ]
    },
    {
        id: 'convo_9',
        participant: {
          id: 'user_9',
          name: 'Ricardo Nunes',
          avatar: 'https://i.pravatar.cc/150?u=ricardo',
          jobTitle: 'Analista Financeiro' 
        },
        isFavorite: true,
        messages: [
          { id: 'msg_16', senderId: 'user_9', text: 'Só para avisar, o faturamento do West Plaza foi emitido.', timestamp: '16:50' },
          { id: 'msg_17', senderId: 'user_0', text: 'Recebido. Obrigado, Ricardo!', timestamp: '16:51' },
        ]
    },
    {
      id: 'convo_10',
      participant: {
        id: 'user_10',
        name: 'Ana Silva',
        avatar: 'https://i.pravatar.cc/150?u=ana',
        jobTitle: 'Assistente Administrativa' 
      },
      isFavorite: false,
      messages: [
        { id: 'msg_18', senderId: 'user_10', text: 'Pessoal, a cozinha do 3º andar está com o micro-ondas quebrado. Alguém do facilities já foi notificado?', timestamp: 'Quarta' },
      ]
    }
  ]
};