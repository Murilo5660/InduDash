let chartEnergiaInstance = null;

function renderizarChartEnergia(maquinas) {
    const ctx = document.getElementById('chartEnergia');
    if (!ctx) return;

    // Ordena por energia para melhor visualização
    const sorted = [...maquinas].sort((a, b) => {
        const energyA = a.energiaAtual || a.energia || 0;
        const energyB = b.energiaAtual || b.energia || 0;
        return energyB - energyA;
    }).slice(0, 10); // Top 10 consumidoras

    const labels = sorted.map(m => m.maquina || m.nome);
    const data = sorted.map(m => m.energiaAtual || m.energia || 0);

    if (chartEnergiaInstance) {
        chartEnergiaInstance.destroy();
    }

    chartEnergiaInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Energia (kWh)',
                data: data,
                backgroundColor: 'rgba(234, 88, 12, 0.2)',
                borderColor: 'rgba(234, 88, 12, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: 'rgba(234, 88, 12, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#334155' }
                },
                x: {
                    ticks: { 
                        color: '#94a3b8',
                        maxRotation: 45,
                        minRotation: 45,
                        font: { size: 9 }
                    },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}
