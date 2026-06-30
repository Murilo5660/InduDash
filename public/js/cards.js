// =============================================
// CARDS DO INDUDASH
// Apenas renderização (sem lógica de negócio)
// =============================================

function criarCardMaquina(maquina, setores, statusMap) {
    // 1. Obter dados do setor para limites de temperatura
    const setor = setores[maquina.setor] || { nome: maquina.setor || "N/A", temperaturaMaxima: 80 };
    const limiteTemp = setor.temperaturaMaxima;
    
    // 2. Obter informações de status (cor, ícone, descrição)
    const statusInfo = statusMap[maquina.status] || {
        descricao: "Desconhecido",
        cor: "#9CA3AF",
        icone: "fa-question"
    };

    // 3. Lógica de Cor do Card (Borda Superior) - DEFINITIVA
    // A cor da borda deve seguir o STATUS da máquina primordialmente, 
    // mas ser "sobrescrita" por alertas de temperatura se estiver operando.
    
    let bordaClass = "normal"; // Default: Verde

    // Regra de Ouro: Se a máquina está PARADA ou OFFLINE, é CRÍTICO (Vermelho)
    if (maquina.status === "PARADA" || maquina.status === "OFFLINE") {
        bordaClass = "critico";
    } 
    // Regra 2: Se está em MANUTENCAO ou ATENCAO, é ATENCAO (Amarelo/Laranja)
    else if (maquina.status === "MANUTENCAO" || maquina.status === "ATENCAO") {
        bordaClass = "atencao";
    }
    // Regra 3: Se está OPERANDO, checamos a temperatura
    else {
        const tempStatus = classificarTemperatura(maquina.temperatura || 0, limiteTemp);
        if (tempStatus === "critico") {
            bordaClass = "critico"; // Temperatura estourou o limite -> Vermelho
        } else if (tempStatus === "atencao") {
            bordaClass = "atencao"; // Temperatura chegando no limite -> Amarelo
        } else {
            bordaClass = "normal";  // Tudo ok -> Verde
        }
    }
    
    // 4. Cálculos e Formatações
    const producao = maquina.producaoAtual || maquina.producao || 0;
    const energia = maquina.energiaAtual || maquina.energia || 0;
    const oee = calcularOEE(
        maquina.disponibilidade || 0,
        maquina.performance || 0,
        maquina.qualidade || 0
    );

    // 5. Template HTML
    return `
        <div class="card maquina ${bordaClass}">
            <div class="card-header">
                <h3>${maquina.maquina || maquina.nome}</h3>
                <span class="status" style="color:${statusInfo.cor}">
                    <i class="fa-solid ${statusInfo.icone}"></i>
                    ${statusInfo.descricao}
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
