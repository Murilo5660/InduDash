let chartOEEInstance = null;

function renderizarChartOEE(maquinas) {
    const ctx = document.getElementById('chartOEE');
    if (!ctx) return;

    // Categorizando máquinas por faixa de OEE
    let excelente = 0; // >= 85
    let bom = 0;       // 70 - 85
    let regular = 0;   // 50 - 70
    let critico = 0;   // < 50

    maquinas.forEach(m => {
        const oee = calcularOEE(
            m.disponibilidade || 0,
            m.performance || 0,
            m.qualidade || 0
        );
        
        if (oee >= 85) excelente++;
        else if (oee >= 70) bom++;
        else if (oee >= 50) regular++;
        else critico++;
    });

    if (chartOEEInstance) {
        chartOEEInstance.destroy();
    }

    chartOEEInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Excelente (>85%)', 'Bom (70-85%)', 'Regular (50-70%)', 'Crítico (<50%)'],
            datasets: [{
                data: [excelente, bom, regular, critico],
                backgroundColor: [
                    '#22C55E', // Verde
                    '#3B82F6', // Azul
                    '#FACC15', // Amarelo
                    '#EF4444'  // Vermelho
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        usePointStyle: true,
                        padding: 15,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = excelente + bom + regular + critico;
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} máquinas (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '65%'
        }
    });
}
