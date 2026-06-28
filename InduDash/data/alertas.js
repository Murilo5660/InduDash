const alertas = {

    TEMP_ALTA: {
        codigo: "TEMP_ALTA",
        tipo: "Temperatura",
        nivel: "Alto",
        mensagem: "Temperatura acima do limite recomendado."
    },

    TEMP_CRITICA: {
        codigo: "TEMP_CRITICA",
        tipo: "Temperatura",
        nivel: "Crítico",
        mensagem: "Temperatura crítica. Intervenção imediata necessária."
    },

    ENERGIA_ALTA: {
        codigo: "ENERGIA_ALTA",
        tipo: "Energia",
        nivel: "Médio",
        mensagem: "Consumo de energia acima do esperado."
    },

    PRODUCAO_BAIXA: {
        codigo: "PRODUCAO_BAIXA",
        tipo: "Produção",
        nivel: "Médio",
        mensagem: "Produção abaixo da meta estabelecida."
    },

    PRODUCAO_PARADA: {
        codigo: "PRODUCAO_PARADA",
        tipo: "Produção",
        nivel: "Crítico",
        mensagem: "Máquina parada. Produção interrompida."
    },

    MANUTENCAO_PROXIMA: {
        codigo: "MANUTENCAO_PROXIMA",
        tipo: "Manutenção",
        nivel: "Médio",
        mensagem: "Manutenção preventiva programada para os próximos dias."
    },

    MANUTENCAO_EM_ANDAMENTO: {
        codigo: "MANUTENCAO_EM_ANDAMENTO",
        tipo: "Manutenção",
        nivel: "Informativo",
        mensagem: "Máquina em manutenção programada."
    },

    OFFLINE: {
        codigo: "OFFLINE",
        tipo: "Comunicação",
        nivel: "Crítico",
        mensagem: "Máquina sem comunicação com o servidor."
    }

};

module.exports = alertas;
