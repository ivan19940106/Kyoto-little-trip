$(document).ready(function(e){
    //mine
    var progress = document.getElementById('customized').getContext('2d');
    var customized = new Chart(progress, {
        type: 'horizontalBar',
        data: {
            labels: ['琴頭', '琴頸', '桶身', '上漆','調整'],
            datasets: [{
                label: '完成度%',
                labelClolr: 'rgba(75, 192, 192, 0.2)',
                data: [90, 70, 100, 20, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: ['訂製琴款製作進度'],
                fontSize: 28,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});