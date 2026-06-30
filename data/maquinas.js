const maquinas = [

{
    id: "M01",
    maquina: "CNC-01",
    setor: "USI",

    status: "OPERANDO",

    temperatura: 67,

    producaoAtual: 218,

    pecasBoas: 216,
    pecasRefugadas: 2,

    energiaAtual: 19,
    energiaDia: 462,

    disponibilidade: 98,
    performance: 97,
    qualidade: 99,

    tempoOperando: 492,
    tempoParada: 8,

    ultimaManutencao: "2026-06-12",
    proximaManutencao: "2026-07-20",

    alerta: null,

    ultimaAtualizacao:  "2026-06-27T22:05:00"
},

{
    id: "M02",
    maquina: "CNC-02",
    setor: "USI",

    status: "OPERANDO",

    temperatura: 72,

    producaoAtual: 205,

    pecasBoas: 201,
    pecasRefugadas: 4,

    energiaAtual: 24,
    energiaDia: 508,

    disponibilidade: 95,
    performance: 94,
    qualidade: 98,

    tempoOperando: 465,
    tempoParada: 20,

    ultimaManutencao: "2026-06-18",
    proximaManutencao: "2026-07-28",

    alerta: null,

    ultimaAtualizacao:  "2026-06-27T22:05:00"
},

{
    id: "M03",
    maquina: "CNC-03",
    setor: "USI",

    status: "ATENCAO",

    temperatura: 83,

    producaoAtual: 192,
    metaProducao: 220,

    pecasBoas: 186,
    pecasRefugadas: 6,

    energiaAtual: 28,
    energiaDia: 534,

    disponibilidade: 91,
    performance: 88,
    qualidade: 97,

    tempoOperando: 430,
    tempoParada: 42,

    ultimaManutencao: "2026-06-01",
    proximaManutencao: "2026-07-03",

    alerta: "Temperatura elevada",

    ultimaAtualizacao:  "2026-06-27T22:05:00"
},

{
    id: "M04",
    maquina: "CNC-04",
    setor: "USI",

    status: "OPERANDO",

    temperatura: 69,

    producaoAtual: 198,

    pecasBoas: 196,
    pecasRefugadas: 2,

    energiaAtual: 20,
    energiaDia: 447,

    disponibilidade: 96,
    performance: 93,
    qualidade: 99,

    tempoOperando: 478,
    tempoParada: 15,

    ultimaManutencao: "2026-06-10",
    proximaManutencao: "2026-07-18",

    alerta: null,

    ultimaAtualizacao: "22:05"
},

{
    id: "M05",
    maquina: "CNC-05",
    setor: "USI",

    status: "OPERANDO",

    temperatura: 66,

    producaoAtual: 214,

    pecasBoas: 212,
    pecasRefugadas: 2,

    energiaAtual: 18,
    energiaDia: 455,

    disponibilidade: 97,
    performance: 96,
    qualidade: 99,

    tempoOperando: 485,
    tempoParada: 10,

    ultimaManutencao: "2026-06-22",
    proximaManutencao: "2026-08-01",

    alerta: null,

    ultimaAtualizacao: "2026-05-27T22:30:00"
},
{
    id: "M06",

    maquina: "LASER-01",

    setor: "COR",

    status: "OPERANDO",

    temperatura: 61,

    producaoAtual: 176,

    pecasBoas: 174,
    pecasRefugadas: 2,

    energiaAtual: 16,
    energiaDia: 392,

    disponibilidade: 97,
    performance: 96,
    qualidade: 99,

    tempoOperando: 481,
    tempoParada: 11,

    ultimaManutencao: "2026-06-15",
    proximaManutencao: "2026-07-25",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M07",

    maquina: "LASER-02",

    setor: "COR",

    status: "ATENCAO",

    temperatura: 74,

    producaoAtual: 161,

    pecasBoas: 156,
    pecasRefugadas: 5,

    energiaAtual: 21,
    energiaDia: 445,

    disponibilidade: 93,
    performance: 90,
    qualidade: 97,

    tempoOperando: 452,
    tempoParada: 34,

    ultimaManutencao: "2026-05-30",
    proximaManutencao: "2026-07-02",

    alerta: "MANUTENCAO_PROXIMA",

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M08",

    maquina: "PLASMA-01",

    setor: "COR",

    status: "OPERANDO",

    temperatura: 69,

    producaoAtual: 172,

    pecasBoas: 170,
    pecasRefugadas: 2,

    energiaAtual: 18,
    energiaDia: 416,

    disponibilidade: 96,
    performance: 95,
    qualidade: 99,

    tempoOperando: 470,
    tempoParada: 18,

    ultimaManutencao: "2026-06-09",
    proximaManutencao: "2026-07-16",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M09",

    maquina: "SERRA-01",

    setor: "COR",

    status: "OPERANDO",

    temperatura: 57,

    producaoAtual: 178,

    pecasBoas: 177,
    pecasRefugadas: 1,

    energiaAtual: 15,
    energiaDia: 381,

    disponibilidade: 98,
    performance: 97,
    qualidade: 99,

    tempoOperando: 488,
    tempoParada: 6,

    ultimaManutencao: "2026-06-20",
    proximaManutencao: "2026-08-05",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M10",

    maquina: "SERRA-02",

    setor: "COR",

    status: "MANUTENCAO",

    temperatura: 34,

    producaoAtual: 0,

    pecasBoas: 0,
    pecasRefugadas: 0,

    energiaAtual: 2,
    energiaDia: 48,

    disponibilidade: 0,
    performance: 0,
    qualidade: 0,

    tempoOperando: 0,
    tempoParada: 495,

    ultimaManutencao: "2026-06-27",
    proximaManutencao: "2026-08-27",

    alerta: "MANUTENCAO_EM_ANDAMENTO",

    ultimaAtualizacao: "2026-06-27T22:05:00"
},
{
    id: "M11",

    maquina: "ROBO-SOLDA-01",

    setor: "SOL",

    status: "OPERANDO",

    temperatura: 76,

    producaoAtual: 168,

    pecasBoas: 166,
    pecasRefugadas: 2,

    energiaAtual: 21,
    energiaDia: 512,

    disponibilidade: 97,
    performance: 96,
    qualidade: 99,

    tempoOperando: 486,
    tempoParada: 9,

    ultimaManutencao: "2026-06-14",
    proximaManutencao: "2026-07-24",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M12",

    maquina: "ROBO-SOLDA-02",

    setor: "SOL",

    status: "OPERANDO",

    temperatura: 82,

    producaoAtual: 162,

    pecasBoas: 159,
    pecasRefugadas: 3,

    energiaAtual: 23,
    energiaDia: 548,

    disponibilidade: 95,
    performance: 94,
    qualidade: 98,

    tempoOperando: 470,
    tempoParada: 18,

    ultimaManutencao: "2026-06-10",
    proximaManutencao: "2026-07-18",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M13",

    maquina: "CABINE-SOLDA-01",

    setor: "SOL",

    status: "ATENCAO",

    temperatura: 88,

    producaoAtual: 148,

    pecasBoas: 142,
    pecasRefugadas: 6,

    energiaAtual: 25,
    energiaDia: 563,

    disponibilidade: 90,
    performance: 88,
    qualidade: 95,

    tempoOperando: 421,
    tempoParada: 54,

    ultimaManutencao: "2026-05-28",
    proximaManutencao: "2026-06-30",

    alerta: "TEMP_ALTA",

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M14",

    maquina: "ROBO-SOLDA-03",

    setor: "SOL",

    status: "MANUTENCAO",

    temperatura: 39,

    producaoAtual: 0,

    pecasBoas: 0,
    pecasRefugadas: 0,

    energiaAtual: 3,
    energiaDia: 62,

    disponibilidade: 0,
    performance: 0,
    qualidade: 0,

    tempoOperando: 0,
    tempoParada: 498,

    ultimaManutencao: "2026-06-27",
    proximaManutencao: "2026-08-20",

    alerta: "MANUTENCAO_EM_ANDAMENTO",

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M15",

    maquina: "PONTO-SOLDA-01",

    setor: "SOL",

    status: "OPERANDO",

    temperatura: 71,

    producaoAtual: 170,

    pecasBoas: 169,
    pecasRefugadas: 1,

    energiaAtual: 20,
    energiaDia: 501,

    disponibilidade: 98,
    performance: 97,
    qualidade: 99,

    tempoOperando: 490,
    tempoParada: 5,

    ultimaManutencao: "2026-06-19",
    proximaManutencao: "2026-07-30",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},
{
    id: "M16",

    maquina: "LINHA-01",

    setor: "MON",

    status: "OPERANDO",

    temperatura: 48,

    producaoAtual: 246,

    pecasBoas: 244,
    pecasRefugadas: 2,

    energiaAtual: 13,
    energiaDia: 336,

    disponibilidade: 98,
    performance: 98,
    qualidade: 99,

    tempoOperando: 492,
    tempoParada: 6,

    ultimaManutencao: "2026-06-18",
    proximaManutencao: "2026-08-02",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M17",

    maquina: "LINHA-02",

    setor: "MON",

    status: "OPERANDO",

    temperatura: 51,

    producaoAtual: 233,

    pecasBoas: 229,
    pecasRefugadas: 4,

    energiaAtual: 14,
    energiaDia: 348,

    disponibilidade: 96,
    performance: 95,
    qualidade: 98,

    tempoOperando: 478,
    tempoParada: 18,

    ultimaManutencao: "2026-06-09",
    proximaManutencao: "2026-07-21",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M18",

    maquina: "LINHA-03",

    setor: "MON",

    status: "PARADA",

    temperatura: 36,

    producaoAtual: 0,

    pecasBoas: 0,
    pecasRefugadas: 0,

    energiaAtual: 2,
    energiaDia: 41,

    disponibilidade: 0,
    performance: 0,
    qualidade: 0,

    tempoOperando: 0,
    tempoParada: 500,

    ultimaManutencao: "2026-06-15",
    proximaManutencao: "2026-07-15",

    alerta: "PRODUCAO_PARADA",

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M19",

    maquina: "CABINE-PINTURA-01",

    setor: "PIN",

    status: "OPERANDO",

    temperatura: 46,

    producaoAtual: 198,

    pecasBoas: 197,
    pecasRefugadas: 1,

    energiaAtual: 11,
    energiaDia: 285,

    disponibilidade: 99,
    performance: 98,
    qualidade: 100,

    tempoOperando: 496,
    tempoParada: 3,

    ultimaManutencao: "2026-06-22",
    proximaManutencao: "2026-08-10",

    alerta: null,

    ultimaAtualizacao: "2026-06-27T22:05:00"
},

{
    id: "M20",

    maquina: "EXPEDICAO-01",

    setor: "EXP",

    status: "OFFLINE",

    temperatura: 0,

    producaoAtual: 0,

    pecasBoas: 0,
    pecasRefugadas: 0,

    energiaAtual: 0,
    energiaDia: 0,

    disponibilidade: 0,
    performance: 0,
    qualidade: 0,

    tempoOperando: 0,
    tempoParada: 540,

    ultimaManutencao: "2026-06-05",
    proximaManutencao: "2026-08-05",

    alerta: "OFFLINE",

    ultimaAtualizacao: "2026-06-27T20:42:00"
}
];

module.exports = maquinas;
