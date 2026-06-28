const status = {

    OPERANDO: {
        codigo: "OPERANDO",
        descricao: "Operando",
        cor: "#22C55E",
        icone: "fa-circle-play",
        prioridade: 1
    },

    ATENCAO: {
        codigo: "ATENCAO",
        descricao: "Atenção",
        cor: "#FACC15",
        icone: "fa-triangle-exclamation",
        prioridade: 2
    },

    MANUTENCAO: {
        codigo: "MANUTENCAO",
        descricao: "Manutenção",
        cor: "#F97316",
        icone: "fa-screwdriver-wrench",
        prioridade: 3
    },

    PARADA: {
        codigo: "PARADA",
        descricao: "Parada",
        cor: "#EF4444",
        icone: "fa-circle-stop",
        prioridade: 4
    },

    OFFLINE: {
        codigo: "OFFLINE",
        descricao: "Offline",
        cor: "#6B7280",
        icone: "fa-wifi-slash",
        prioridade: 5
    }

};

module.exports = status;
