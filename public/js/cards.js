// =============================================
// CARDS DO INDUDASH
// Apenas renderização (sem lógica de negócio)
// =============================================

function criarCardMaquina(maquina, setores, statusMap) {
    const setor = setores[maquina.setor] || { nome: maquina.setor || "N/A", temperaturaMaxima: 80 };
    const limiteTemp = setor.temperaturaMaxima;
    const status = obterStatusFormatado(statusMap[maquina.status]);

    const tempClass = classificarTemperatura(maquina.temperatura || 0, limiteTemp);
    
    // Normalizando campos do backend
    const producao = maquina.producaoAtual || maquina.producao || 0;
    const energia = maquina.energiaAtual || maquina.energia || 0;

    const oee = calcularOEE(
        maquina.disponibilidade || 0,
        maquina.performance || 0,
        maquina.qualidade || 0
    );

    return `
        <div class="card maquina ${tempClass}">
            <div class="card-header">
                <h3>${maquina.maquina || maquina.nome}</h3>
                <span class="status" style="color:${status.cor}">
                    <i class="fa ${status.icone}"></i>
                    ${status.descricao}
                </span>
            </div>

            <div class="card-body">
                <p><strong>Setor</strong> <span>${setor.nome}</span></p>
                <p><strong>Temp.</strong> <span>${formatarTemperatura(maquina.temperatura || 0)}</span></p>
                <p><strong>Produção</strong> <span>${formatarProducao(producao)}</span></p>
                <p><strong>Energia</strong> <span>${formatarEnergia(energia)}</span></p>
                <p><strong>OEE</strong> <span>${formatarPorcentagem(oee)}</span></p>
                <p><strong>ID</strong> <span>${maquina.id || "-"}</span></p>
            </div>
        </div>
    `;
}

function renderizarCards(maquinas, setores, statusMap) {
    const container = document.getElementById("cardsContainer");
    if (!container) return;

    if (!maquinas || maquinas.length === 0) {
        container.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>Nenhuma máquina encontrada.</p>";
        return;
    }

    container.innerHTML = maquinas
        .map(maquina => criarCardMaquina(maquina, setores, statusMap))
        .join("");
}
