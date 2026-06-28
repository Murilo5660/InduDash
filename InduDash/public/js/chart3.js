let chartStatusInstance = null;

function renderizarChartStatus(maquinas) {
    const ctx = document.getElementById('chartStatus');
    if (!ctx) return;

    const statusCount = {
        'OPERANDO': 0,
        'PARADA': 0,
        'MANUTENCAO': 0,
        'ATENCAO': 0,
        'OFFLINE': 0
    };

    maquinas.forEach(m => {
        if (statusCount[m.status] !== undefined) {
            statusCount[m.status]++;
        }
    });

    const labels = Object.keys(statusCount);
    const data = Object.values(statusCount);
    const colors = [
        '#22C55E', // OPERANDO - Verde
        '#EF4444', // PARADA - Vermelho
        '#F97316', // MANUTENCAO - Laranja
        '#FACC15', // ATENCAO - Amarelo
        '#6B7280'  // OFFLINE - Cinza
    ];

    if (chartStatusInstance) {
        chartStatusInstance.destroy();
    }

    chartStatusInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#94a3b8',
                        padding: 10,
                        font: { size: 10 }
                    }
                }
            },
            cutout: '60%'
        }
    });
}
