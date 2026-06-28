// =============================================
// DASHBOARD DO INDUDASH
// Atualização dos KPIs
// =============================================

function atualizarKPIs(maquinas) {

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    if (!maquinas || maquinas.length === 0) {
        setText("oeeTotal", "0%");
        setText("producaoTotal", "0 peças");
        setText("qtdMaquinas", "0");
        setText("maquinasParadas", "0");
        setText("energiaTotal", "0 kWh");
        setText("maquinaMaisProdutiva", "---");
        setText("maquinaMaisQuente", "---");
        return;
    }

    let producaoTotal = 0;
    let energiaTotal = 0;
    let somaOEE = 0;
    
    let maquinaMaisQuente = maquinas[0];
    let maquinaMaisProdutiva = maquinas[0];

    let maquinasInativas = 0; // Parada ou Manutenção

    maquinas.forEach(maquina => {
        // Normalizando nomes de campos (backend usa producaoAtual e energiaAtual)
        const producao = maquina.producaoAtual || maquina.producao || 0;
        const energia = maquina.energiaAtual || maquina.energia || 0;
        const temp = maquina.temperatura || 0;

        producaoTotal += producao;
        energiaTotal += energia;

        // Extremos
        if (temp > (maquinaMaisQuente.temperatura || 0)) {
            maquinaMaisQuente = maquina;
        }

        if (producao > (maquinaMaisProdutiva.producaoAtual || maquinaMaisProdutiva.producao || 0)) {
            maquinaMaisProdutiva = maquina;
        }

        // Status Inativos
        if (maquina.status === "PARADA" || maquina.status === "MANUTENCAO") {
            maquinasInativas++;
        }

        // Cálculo OEE Individual
        const oee = calcularOEE(
            maquina.disponibilidade || 0,
            maquina.performance || 0,
            maquina.qualidade || 0
        );
        somaOEE += oee;
    });

    const total = maquinas.length;
    const oeeMedio = somaOEE / total;

    // UI Update
    setText("oeeTotal", formatarPorcentagem(oeeMedio));
    setText("producaoTotal", formatarProducao(producaoTotal));
    setText("qtdMaquinas", total.toString());
    setText("maquinasParadas", maquinasInativas.toString());
    setText("energiaTotal", formatarEnergia(energiaTotal));
    
    setText(
        "maquinaMaisProdutiva", 
        `${maquinaMaisProdutiva.maquina || maquina.nome || "---"}`
    );
    
    setText(
        "maquinaMaisQuente", 
        `${maquinaMaisQuente.maquina || maquina.nome || "---"} (${formatarTemperatura(maquinaMaisQuente.temperatura || 0)})`
    );
}
