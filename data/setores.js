const setores = {

    USI: {
        id: "USI",
        nome: "Usinagem",
        metaProducao: 220,
        temperaturaMaxima: 85,
        consumoPadrao: 20,
        cor: "#2563EB",
        icone: "fa-industry"
    },

    COR: {
        id: "COR",
        nome: "Corte",
        metaProducao: 180,
        temperaturaMaxima: 75,
        consumoPadrao: 17,
        cor: "#16A34A",
        icone: "fa-scissors"
    },

    SOL: {
        id: "SOL",
        nome: "Soldagem",
        metaProducao: 170,
        temperaturaMaxima: 90,
        consumoPadrao: 22,
        cor: "#EA580C",
        icone: "fa-fire"
    },

    MON: {
        id: "MON",
        nome: "Montagem",
        metaProducao: 250,
        temperaturaMaxima: 60,
        consumoPadrao: 14,
        cor: "#7C3AED",
        icone: "fa-screwdriver-wrench"
    },

    PIN: {
        id: "PIN",
        nome: "Pintura",
        metaProducao: 200,
        temperaturaMaxima: 55,
        consumoPadrao: 12,
        cor: "#EC4899",
        icone: "fa-spray-can"
    },

    EXP: {
        id: "EXP",
        nome: "Expedição",
        metaProducao: 300,
        temperaturaMaxima: 45,
        consumoPadrao: 8,
        cor: "#0891B2",
        icone: "fa-truck-fast"
    }

};

module.exports = setores;
