import { useParams } from "react-router-dom";

import Sidebar from "../../components/menuPrincipalLateral/menuPrincipalLateral";
import fotoPainelTravado from "../../assets/img/foto_painel_travado.jpg"
import { FaDownload } from "react-icons/fa";

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
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    { id: "CT-0922", fotos: [fotoPainelTravado] },
    {
        id: "CT-0923",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0924",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0925",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0926",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0927",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0928",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0929",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0930",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0931",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    { id: "CT-0932", fotos: [fotoPainelTravado] },
    {
        id: "CT-0933",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0934",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0935",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
        ],
    },
    {
        id: "CT-0936",
        fotos: [
            fotoPainelTravado,
            fotoPainelTravado,
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
            <div className="d-flex flex-column vw-100" style={{ backgroundColor: "var(--cor-background)", padding: "31px" }}>
                <div style={{ width: "451px", marginBottom: "25px", }}>
                    <div>
                        <h1 className="fw-bolder" style={{ marginBottom: "20px", fontSize: "28px", color: "#0a2344" }}>
                            Chamado #{chamado.id}
                        </h1>
                    </div>

                    <div className="titulo">
                        <h2 className="fs-4 fw-semibold" style={{ color: "var(--cor-principal)" }}>{chamado.titulo}</h2>

                        <div className="d-flex justify-content-between">
                            <p className="fs-6 fw-normal" style={{ color: "#0a2344" }}>Aberto em {chamado.data}</p>
                            <p className="fs-6 fw-normal" style={{ color: "#0a2344" }}>Por {chamado.salesRep}</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between" style={{ gap: "65px" }}>
                    <div className="bg-white rounded-3" style={{ width: "535px", height: "700px", padding: "15px 23px" }}>
                        <h3 className="mt-0 fw-bold" style={{ marginBottom: "15px", fontSize: "22px", color: "var(--cor-principal)" }}>Informações principais</h3>

                        <div className="d-flex" style={{ gap: "54px" }}>
                            <div>
                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Categoria</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.categoria}</p>
                                </div>

                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Modelo do elevador</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.modeloDoElevador}</p>
                                </div>

                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Prioridade</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.prioridade}</p>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Resp. Comercial</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.salesRep}</p>
                                </div>

                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Cliente</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.company}</p>
                                </div>

                                <div className="d-flex flex-column" style={{ gap: "5px" }}>
                                    <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "22", color: "var(--cor-principal)" }}>Localização</h4>
                                    <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{chamado.local}</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <h3 className="mt-0 fw-bold" style={{ marginBottom: "15px", fontSize: "22px", color: "var(--cor-principal)" }}>Descrição</h3>
                            <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px", lineHeight: "1.5" }}>{chamadoDescricao.descricao}</p>
                        </div>

                        <div>
                            <h3 className="fw-bold" style={{ marginTop: "20px", marginBottom: "15px", fontSize: "22px", color: "var(--cor-principal)" }}>Linha do Tempo</h3>
                            <div>
                                <div>
                                    {chamadoUpdates.updates.map((update, index) => (
                                        <div key={index}>
                                            <h4 className="mb-0 fw-semibold" style={{ marginTop: "10px", fontSize: "20px", color: "var(--cor-principal)" }}>{update.status}</h4>
                                            <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}>{update.data}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="informacoes-adicionais d-flex flex-column bg-white rounded-3" style={{ width: "801px", boxSizing: "border-box", padding: "15px 23px" }}>
                        <div className="d-flex flex-column">
                            <h3 className="mt-0 fw-bold" style={{ marginBottom: "15px", fontSize: "22px", color: "var(--cor-principal)" }}>Anexos</h3>

                            <div className="d-flex gap-4 rounded-3" style={{ boxSizing: "border-box", backgroundColor: "#F0F0F0", border: "1px solid #0a234440", padding: "11px 11px 4px 11px" }}>
                                {chamadoFotos.fotos.map((foto, index) => (
                                    <div key={index} style={{ width: "fit-content" }}>
                                        <img src={foto} />
                                        <a href="{foto}" download="foto_painel_travado.jpg" className="text-decoration-none">
                                            <p className="mt-0 fw-normal" style={{ marginBottom: "10px", fontSize: "14px" }}><FaDownload /> {foto.split("/").pop()}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="d-flex flex-column" style={{ marginTop: "20px" }}>
                            <h3 className="mt-0 fw-bold" style={{ marginBottom: "15px", fontSize: "22px", color: "var(--cor-principal)" }}>Comentários</h3>

                            <div className="rounded-3" style={{ boxSizing: "border-box", backgroundColor: "#F0F0F0", border: "1px solid #0a234440", padding: "11px 11px 4px 11px" }}>
                                {chamadoComentarios.comentarios.map((comentario, index) => (
                                    <div key={index} className="d-flex">
                                        <div className="d-flex align-items-center text-center fw-bold text-white rounded-circle p-2 me-2" style={{ backgroundColor: "var(--cor-principal)", height: "24px" }}>{comentario.autor.charAt(0)}</div>
                                        <div>
                                            <div className="d-flex" style={{ whiteSpace: "nowrap", gap: "20px" }}>
                                                <div className="d-flex flex-column" style={{ width: "fit-content" }}>
                                                    <div>
                                                        <h4 className="m-0 fw-bold" style={{ fontSize: "15px", color: "var(--cor-principal)" }}>{comentario.autor}</h4>
                                                    </div>

                                                    <div>
                                                        <p className="m-0 fw-semibold" style={{ fontSize: "13px" }}>{comentario.cargo}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="m-0 fw-normal" style={{ fontSize: "14px" }}>{comentario.data}</p>
                                                </div>
                                            </div>
                                            <div style={{ margin: "3px 0 12px 0" }}>
                                                <p className="m-0 fw-normal" style={{ fontSize: "14px" }}>{comentario.comentario}</p>
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
