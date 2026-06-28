// =============================================
// MODAL DO INDUDASH
// =============================================

const modal = document.getElementById("modalMaquina");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnFechar = document.getElementById("fecharModal");
const btnFecharSuperior = document.getElementById("fecharModalSuperior");
const formulario = document.getElementById("formMaquina");

function abrirModal() {
    modal.classList.add("aberto");
}

function fecharModal() {
    modal.classList.remove("aberto");
    formulario.reset();
}

function inicializarModal(callbackSucesso) {
    if (!btnAdicionar) return;

    btnAdicionar.addEventListener("click", abrirModal);

    [btnFechar, btnFecharSuperior].forEach(btn => {
        if (btn) btn.addEventListener("click", fecharModal);
    });

    if (formulario) {
        formulario.addEventListener("submit", async (e) => {
            e.preventDefault();

            const novaMaquina = {
                maquina: document.getElementById("nome").value,
                setor: document.getElementById("setor").value,
                temperatura: parseFloat(document.getElementById("temperatura").value),
                producaoAtual: parseInt(document.getElementById("producao").value),
                energiaAtual: parseFloat(document.getElementById("energia").value),
                status: document.getElementById("status").value,
                // Valores padrão para novas máquinas
                disponibilidade: 100,
                performance: 100,
                qualidade: 100,
                ultimaAtualizacao: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            };

            // Validação corrigida
            if (typeof validarMaquina === "function") {
                if (!validarMaquina(novaMaquina)) {
                    return;
                }
            }

            const resultado = await adicionarMaquina(novaMaquina);

            if (resultado) {
                alert("Máquina adicionada com sucesso!");
                fecharModal();
                if (callbackSucesso) callbackSucesso();
            } else {
                alert("Erro ao adicionar máquina. Verifique o console.");
            }
        });
    }
}
