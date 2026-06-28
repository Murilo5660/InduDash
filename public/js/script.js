async function carregarDados() {
    const dados = await buscarDashboard();

    if (!dados) {
        console.error("Não foi possível carregar os dados do dashboard.");
        return;
    }

    console.log("DADOS RECEBIDOS:", dados);

    const maquinas = dados.maquinas || [];
    const setores = dados.setores || {};
    const statusMap = dados.status || {};

    // Atualiza KPIs
    atualizarKPIs(maquinas);

    // Renderiza Cards
    renderizarCards(maquinas, setores, statusMap);

    // Renderiza Gráficos
    renderizarChartOEE(maquinas);
    renderizarChartProducao(maquinas, setores);
    renderizarChartStatus(maquinas);
    renderizarChartEnergia(maquinas);
}

document.addEventListener("DOMContentLoaded", async () => {
    // Carga inicial
    await carregarDados();

    // Inicializa Modal com função de recarregar dados após sucesso
    inicializarModal(async () => {
        await carregarDados();
    });
});
