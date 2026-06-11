// Função para criar gráficos
function criarGrafico(ctx, tipo, labels, data, cor) {
    new Chart(ctx, {
        type: tipo,
        data: {
            labels: labels,
            datasets: [{
                label: 'Indicador',
                data: data,
                backgroundColor: cor,
                borderColor: '#2e7d32',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Dados fictícios
const dadosUsoSolo = [30, 25, 20, 25];
const labelsUsoSolo = ['Agricultura', 'Pastagem', 'Floresta', 'Outros'];

const dadosFlorestas = [70, 15, 15];
const labelsFlorestas = ['Preservadas', 'Degradadas', 'Recuperadas'];

const dadosProducao = [40, 30, 20, 10];
const labelsProducao = ['Grãos', 'Frutas', 'Verduras', 'Outros'];

const dadosAgua = [60, 25, 15];
const labelsAgua = ['Uso Irrigação', 'Consumo Humano', 'Indústria'];

// Criação dos gráficos
criarGrafico(document.getElementById('chartUsoSolo').getContext('2d'), 'doughnut', labelsUsoSolo, dadosUsoSolo, ['#66bb6a','#a5d6a7','#c8e6c9','#e8f5e9']);
criarGrafico(document.getElementById('chartFlorestas').getContext('2d'), 'doughnut', labelsFlorestas, dadosFlorestas, ['#388e3c','#ff7043','#aed581']);
criarGrafico(document.getElementById('chartProducao').getContext('2d'), 'bar', labelsProducao, dadosProducao, ['#81c784','#66bb6a','#388e3c','#a5d6a7']);
criarGrafico(document.getElementById('chartAgua').getContext('2d'), 'pie', labelsAgua, dadosAgua, ['#42a5f5','#90caf9','#bbdefb']);