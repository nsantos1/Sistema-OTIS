import { useParams } from "react-router-dom";

import "./posVendaDetalhes.css";
import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";

const mockData = [
  {
    id: "CT-0921",
    salesRep: "João Ricardo S. O. Coto",
    company: "Construtora Maston",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort Panorâmico",
    prioridade: "Alta",
    categoria: "Manutenção",
  },
  {
    id: "CT-0922",
    salesRep: "Nicolas Santos dos Santos",
    company: "Construtora Salos",
    local: "Macaé/RJ",
    data: "29/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "FOVF",
    prioridade: "Média",
    categoria: "Manutenção",
  },
  {
    id: "CT-0923",
    salesRep: "Eduardo Vicentini Dudu",
    company: "Construtora Levy",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort",
    prioridade: "Baixa",
    categoria: "Manutenção",
  },
  {
    id: "CT-0924",
    salesRep: "Eduardo Bielecky Milhal",
    company: "Construtora Milho",
    local: "Salvador/BA",
    data: "16/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "FOVF",
    prioridade: "Baixa",
    categoria: "Manutenção",
  },
  {
    id: "CT-0925",
    salesRep: "Caio Moraes Ribeiro",
    company: "Construtora Silk",
    local: "Volta Redonda/RJ",
    data: "24/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Light Plus",
    prioridade: "Alta",
    categoria: "Manutenção",
  },
  {
    id: "CT-0926",
    salesRep: "Eduardo Bielecky Milhal",
    company: "Construtora Milho",
    local: "Salvador/BA",
    data: "16/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort Panorâmico",
    prioridade: "Alta",
    categoria: "Suporte",
  },
  {
    id: "CT-0927",
    salesRep: "Eduardo Vicentini Dudu",
    company: "Construtora Levy",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Light Plus",
    prioridade: "Alta",
    categoria: "Suporte",
  },
  {
    id: "CT-0928",
    salesRep: "Caio Moraes Ribeiro",
    company: "Construtora Silk",
    local: "Volta Redonda/RJ",
    data: "24/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Compass® 360",
    prioridade: "Alta",
    categoria: "Suporte",
  },
  {
    id: "CT-0929",
    salesRep: "João Ricardo S. O. Coto",
    company: "Construtora Maston",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Light Plus",
    prioridade: "Média",
    categoria: "Suporte",
  },
  {
    id: "CT-0930",
    salesRep: "Nicolas Santos dos Santos",
    company: "Construtora Salos",
    local: "Macaé/RJ",
    data: "29/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Skybuild™ ",
    prioridade: "Alta",
    categoria: "Suporte",
  },
  {
    id: "CT-0931",
    salesRep: "Gui Negão",
    company: "Construtora Kuro",
    local: "Curitiba/PR",
    data: "29/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort Panorâmico",
    prioridade: "Baixa",
    categoria: "Avaliação",
  },
  {
    id: "CT-0932",
    salesRep: "Caio Moraes Ribeiro",
    company: "Construtora Silk",
    local: "Volta Redonda/RJ",
    data: "24/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort",
    prioridade: "Média",
    categoria: "Avaliação",
  },
  {
    id: "CT-0933",
    salesRep: "Eduardo Bielecky Milhal",
    company: "Construtora Milho",
    local: "Salvador/BA",
    data: "16/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Skyrise®",
    prioridade: "Alta",
    categoria: "Avaliação",
  },
  {
    id: "CT-0934",
    salesRep: "João Ricardo S. O. Coto",
    company: "Construtora Maston",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort Panorâmico",
    prioridade: "Alta",
    categoria: "Avaliação",
  },
  {
    id: "CT-0935",
    salesRep: "Eduardo Vicentini Dudu",
    company: "Construtora Levy",
    local: "São Paulo/SP",
    data: "27/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort",
    prioridade: "Média",
    categoria: "Avaliação",
  },
  {
    id: "CT-0936",
    salesRep: "Nicolas Santos dos Santos",
    company: "Construtora Salos",
    local: "Macaé/RJ",
    data: "29/08/2025",
    titulo: "Elevador Travando no 2º andar",
    relato: "Cliente relatava travamento intermitente após horário de pico.",
    modeloDoElevador: "Gen2® Comfort",
    prioridade: "Alta",
    categoria: "Avaliação",
  },
];

const descricaoData = [
  {
    id: "CT-0921",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0922",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0923",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0924",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0925",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0926",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0927",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0928",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0929",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0930",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0931",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0932",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0933",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0934",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0935",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
  {
    id: "CT-0936",
    descricao:
      "O elevador do Prédio A está apresentando falhas recorrentes ao chegar no 5º andar. Durante a subida, ele trava por alguns segundos antes de abrir as portas, causando preocupação nos usuários. Em alguns momentos, as portas não abrem automaticamente, sendo necessário pressionar o botão mais de uma vez. O problema foi identificado por diversos moradores na manhã do dia 25/08/2025. Solicita-se atendimento urgente devido à alta prioridade e ao risco de segurança para os usuários.",
  },
];

const fotosData = [
  {
    id: "CT-0921",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  { id: "CT-0922", fotos: ["/src/assets/img/foto_painel_travado.jpg"] },
  {
    id: "CT-0923",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0924",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0925",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0926",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0927",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0928",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0929",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0930",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0931",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  { id: "CT-0932", fotos: ["/src/assets/img/foto_painel_travado.jpg"] },
  {
    id: "CT-0933",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0934",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0935",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
  {
    id: "CT-0936",
    fotos: [
      "/src/assets/img/foto_painel_travado.jpg",
      "/src/assets/img/foto_painel_travado.jpg",
    ],
  },
];

const updateData = [
  {
    id: "CT-0921",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0922",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0923",
    updates: [
      { status: "Chamado aberto", data: "29/08/2025 - 10:39h" },
      { status: "Em atendimento", data: "29/08/2025 - 15:55h" },
      { status: "Resolvido", data: "02/09/2025 - 15:55h" },
    ],
  },
  {
    id: "CT-0924",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0925",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0926",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0927",
    updates: [
      { status: "Chamado aberto", data: "29/08/2025 - 10:39h" },
      { status: "Em atendimento", data: "29/08/2025 - 15:55h" },
      { status: "Resolvido", data: "02/09/2025 - 15:55h" },
    ],
  },
  {
    id: "CT-0928",
    updates: [
      { status: "Chamado aberto", data: "29/08/2025 - 10:39h" },
      { status: "Em atendimento", data: "29/08/2025 - 15:55h" },
    ],
  },
  {
    id: "CT-0929",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0930",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0931",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0932",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0933",
    updates: [
      { status: "Chamado aberto", data: "29/08/2025 - 10:39h" },
      { status: "Em atendimento", data: "29/08/2025 - 15:55h" },
    ],
  },
  {
    id: "CT-0934",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
  {
    id: "CT-0935",
    updates: [
      { status: "Chamado aberto", data: "29/08/2025 - 10:39h" },
      { status: "Em atendimento", data: "29/08/2025 - 15:55h" },
      { status: "Resolvido", data: "02/09/2025 - 15:55h" },
    ],
  },
  {
    id: "CT-0936",
    updates: [{ status: "Chamado aberto", data: "29/08/2025 - 10:39h" }],
  },
];

const comentariosData = [
  {
    id: "CT-0921",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0922",
    comentarios: [
      {
        autor: "Nicolas Santos",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "Nicolas Santos",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "Nicolas Santos",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0923",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0924",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0925",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0926",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0927",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0928",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0929",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0930",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0931",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0932",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0933",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0934",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0935",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
  {
    id: "CT-0936",
    comentarios: [
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "Percebi que o elevador ficou preso por quase 1 minuto 5º andar antes de abrir. Algumas pessoas ficaram assustadas.",
      },
      {
        autor: "João Ricardo",
        cargo: "Técnico OTIS",
        data: "29/08/2025 13:21h",
        comentario:
          "Foi realizada inspeção inicial. Identificada possível falha no sensor da porta. Peça de substituição será providenciada.",
      },
      {
        autor: "João Ricardo",
        cargo: "Resp. Comercial",
        data: "29/08/2025 13:21h",
        comentario:
          "O elevador voltou a funcionar normalmente após a manutenção. Obrigada pelo rápido atendimento.",
      },
    ],
  },
];

export default function PosVendaDetalhes() {
  const { id } = useParams();
  const chamado = mockData.find((item) => item.id === id);
  const chamadoDescricao = descricaoData.find((item) => item.id === id);
  const chamadoFotos = fotosData.find((item) => item.id === id);
  const chamadoUpdates = updateData.find((item) => item.id === id);
  const chamadoComentarios = comentariosData.find((item) => item.id === id);

  if (!chamado) {
    return <p>Chamado não encontrado</p>;
  }

  return (
    <main className="d-flex vh-100">
      <Sidebar />
      <div
        className="d-flex flex-column"
        style={{
          margin: "31px",
        }}
      >
        <div
          style={{
            width: "451px",
            marginBottom: "25px",
          }}
        >
          <div>
            <h1
              className="fw-bolder"
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: "#0a2344",
              }}
            >
              Chamado #{chamado.id}
            </h1>
          </div>

          <div>
            <h2
              className="fs-4 fw-semibold"
              style={{
                color: "#0a2344",
              }}
            >
              {chamado.titulo}
            </h2>

            <div className="d-flex justify-content-between">
              <p
                className="fs-6 fw-normal"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                Aberto em {chamado.data}
              </p>
              <p
                className="fs-6 fw-normal"
                style={{
                  color: "var(--cor-principal)",
                }}
              >
                Por {chamado.salesRep}
              </p>
            </div>
          </div>
        </div>

        {/* INFORMAÇÕES POS */}
        <div
          className="d-flex justify-content-between"
          style={{
            gap: "65px",
          }}
        >
          <div
            className="bg-white rounded-3"
            style={{
              width: "535px",
              padding: "15px 23px",
            }}
          >
            <h3
              className="mt-0 fw-semibold"
              style={{
                color: "#0a2344",
                marginBottom: "15px",
                fontSize: "22px",
              }}
            >
              Informações principais
            </h3>

            <div
              className="bg-white rounded-3 d-flex"
              style={{
                padding: "15px 23px",
                gap: "54px",
              }}
            >
              <div
                className="bg-white rounded-3"
                style={{
                  padding: "15px 23px",
                }}
              >
                <div
                  className="categoria d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Categoria
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.categoria}
                  </p>
                </div>

                <div
                  className="modelo-do-elevador d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Modelo do elevador
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.modeloDoElevador}
                  </p>
                </div>

                <div
                  className="prioridade d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Prioridade
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.prioridade}
                  </p>
                </div>
              </div>

              <div className="infos-direita">
                <div
                  className="resp-comercial d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Resp. Comercial
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.salesRep}
                  </p>
                </div>

                <div
                  className="cliente d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Cliente
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.company}
                  </p>
                </div>

                <div
                  className="localizacao d-flex flex-column"
                  style={{
                    gap: "5px",
                  }}
                >
                  <h4
                    className="mb-0 fw-semibold"
                    style={{
                      marginTop: "10px",
                      color: "#0a2344",
                      fontSize: "20px",
                    }}
                  >
                    Localização
                  </h4>
                  <p
                    className="mt-0 fw-normal"
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {chamado.local}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="descricao bg-white rounded-3"
              style={{
                width: "535px",
                padding: "15px 23px",
                marginTop: "15px",
              }}
            >
              <h3
                className="mt-0 fw-semibold"
                style={{
                  color: "#0a2344",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                Descrição
              </h3>
              <p
                className="mt-0 fw-normal"
                style={{
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                {chamadoDescricao.descricao}
              </p>
            </div>

            <div className="linha-do-tempo">
              <h3
                className="mt-0 fw-semibold"
                style={{
                  color: "#0a2344",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                Linha do Tempo
              </h3>
              <div className="linha-do-tempo-dados">
                <div className="updates">
                  {chamadoUpdates.updates.map((update, index) => (
                    <div key={index} className="update">
                      <h4
                        className="mb-0 fw-semibold"
                        style={{
                          marginTop: "10px",
                          color: "#0a2344",
                          fontSize: "20px",
                        }}
                      >
                        {update.status}
                      </h4>
                      <p
                        className="mt-0 fw-normal"
                        style={{
                          marginBottom: "10px",
                          fontSize: "14px",
                        }}
                      >
                        {update.data}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="informacoes-adicionais">
            <div className="anexo">
              <h3
                className="mt-0 fw-semibold"
                style={{
                  color: "#0a2344",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                Anexos
              </h3>

              <div className="painel-anexos">
                {chamadoFotos.fotos.map((foto, index) => (
                  <div className="foto">
                    <img key={index} src={foto} />
                    <p
                      className="mt-0 fw-normal"
                      style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {foto.split("/").pop()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="comentarios">
              <h3
                className="mt-0 fw-semibold"
                style={{
                  color: "#0a2344",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                Comentários
              </h3>

              <div className="painel-comentarios">
                {chamadoComentarios.comentarios.map((comentario, index) => (
                  <div className="comentario">
                    <div className="inicial">{comentario.autor.charAt(0)}</div>

                    <div>
                      <div className="dados-pos">
                        <div className="dados-cliente">
                          <div className="nome-pos">
                            <h4
                              className="mb-0 fw-semibold"
                              style={{
                                marginTop: "10px",
                                color: "#0a2344",
                                fontSize: "20px",
                              }}
                            >
                              {comentario.autor}
                            </h4>
                          </div>

                          <div className="cargo">
                            <p
                              className="mt-0 fw-normal"
                              style={{
                                marginBottom: "10px",
                                fontSize: "14px",
                              }}
                            >
                              {comentario.cargo}
                            </p>
                          </div>
                        </div>

                        <div className="data-pos">
                          <p
                            className="mt-0 fw-normal"
                            style={{
                              marginBottom: "10px",
                              fontSize: "14px",
                            }}
                          >
                            {comentario.data}
                          </p>
                        </div>
                      </div>
                      <div className="div-comentario">
                        <p
                          className="mt-0 fw-normal"
                          style={{
                            marginBottom: "10px",
                            fontSize: "14px",
                          }}
                        >
                          {comentario.comentario}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
