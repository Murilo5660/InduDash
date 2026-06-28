let chartProducaoInstance = null;

function renderizarChartProducao(maquinas, setores) {
    const ctx = document.getElementById('chartProducao');
    if (!ctx) return;

    const producaoPorSetor = {};
    
    // Inicializa setores
    Object.keys(setores).forEach(key => {
        producaoPorSetor[setores[key].nome] = 0;
    });

    // Soma produção
    maquinas.forEach(m => {
        const setorNome = setores[m.setor] ? setores[m.setor].nome : m.setor;
        if (!producaoPorSetor[setorNome]) producaoPorSetor[setorNome] = 0;
        producaoPorSetor[setorNome] += (m.producaoAtual || m.producao || 0);
    });

    const labels = Object.keys(producaoPorSetor);
    const data = Object.values(producaoPorSetor);

    if (chartProducaoInstance) {
        chartProducaoInstance.destroy();
    }

    chartProducaoInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peças Produzidas',
                data: data,
                backgroundColor: 'rgba(22, 163, 74, 0.6)',
                borderColor: 'rgba(22, 163, 74, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', // Barra horizontal
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#334155' }
                },
                y: {
                    ticks: { color: '#94a3b8' },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}
