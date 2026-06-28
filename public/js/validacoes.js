// =============================================
// VALIDAÇÕES DO INDUDASH
// =============================================

function validarMaquina(maquina, maquinasExistentes = []) {

    // Nome / Máquina
    const nome = maquina.maquina || maquina.nome;
    if (!nome || nome.trim() === "") {
        alert("Informe o nome da máquina.");
        return false;
    }

    // Temperatura
    if (maquina.temperatura === undefined || maquina.temperatura === "" || isNaN(maquina.temperatura) || maquina.temperatura < 0) {
        alert("Informe uma temperatura válida.");
        return false;
    }

    // Produção (Verificando producaoAtual ou producao)
    const producao = maquina.producaoAtual !== undefined ? maquina.producaoAtual : maquina.producao;
    if (producao === undefined || producao === "" || isNaN(producao) || producao < 0) {
        alert("Informe uma produção válida.");
        return false;
    }

    // Energia (Verificando energiaAtual ou energia)
    const energia = maquina.energiaAtual !== undefined ? maquina.energiaAtual : maquina.energia;
    if (energia === undefined || energia === "" || isNaN(energia) || energia < 0) {
        alert("Informe um consumo de energia válido.");
        return false;
    }

    // Status
    if (!maquina.status) {
        alert("Selecione um status.");
        return false;
    }

    return true;
}
