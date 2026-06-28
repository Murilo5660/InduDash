// =============================================
// UTILS DO INDUDASH
// Motor de cálculos e formatações
// =============================================


// =========================
// CÁLCULOS
// =========================

function calcularOEE(disponibilidade, performance, qualidade) {
    const disp = disponibilidade || 0;
    const perf = performance || 0;
    const qual = qualidade || 0;

    return ((disp * perf * qual) / 10000);
}


// =========================
// STATUS DE TEMPERATURA
// =========================

function classificarTemperatura(temperatura, limiteMaximo) {

    if (temperatura <= limiteMaximo * 0.8) {
        return "normal";
    }

    if (temperatura <= limiteMaximo) {
        return "atencao";
    }

    return "critico";
}


// =========================
// FORMATAÇÕES
// =========================

function formatarTemperatura(valor) {
    return `${valor}°C`;
}

function formatarEnergia(valor) {
    return `${valor} kWh`;
}

function formatarProducao(valor) {
    return `${valor} peças`;
}

function formatarPorcentagem(valor) {
    return `${Number(valor || 0).toFixed(1)}%`;
}


// =========================
// STATUS
// =========================

function obterStatusFormatado(statusObj) {

    if (!statusObj) {
        return {
            descricao: "Desconhecido",
            cor: "#9CA3AF",
            icone: "fa-question",
            prioridade: 99
        };
    }

    return statusObj;
}


// =========================
// NÚMEROS
// =========================

function arredondar(valor, casas = 2) {
    return Number((valor || 0).toFixed(casas));
}
