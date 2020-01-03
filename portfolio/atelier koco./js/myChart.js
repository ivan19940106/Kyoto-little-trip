$(document).ready(function(e){
    //chart
    //dealers
    var dealer = '吉他好朋友';
    var dealersChartType = 'bar';

    //change charts
    $(".dealers-dashboard #charts").on('change',function(e){
        dealersChartType = $(".dealers-dashboard #charts").val();
        console.log(dealersChartType);
    });

    var dealers = document.getElementById('dealersChart').getContext('2d');
    var dealersChart = new Chart(dealers, {
        type: dealersChartType,
        data: {
            labels: ['Carrera SJ', 'Carrera DS', 'Carrera DL', 'Carrera 000', 'Carrera 0-14', 'Dolphin I','Dolphin II SJ','Dolphin II DL'],
            datasets: [{
                label: '月銷售量',
                labelClolr: 'rgba(75, 192, 192, 0.2)',
                data: [12, 19, 3, 5, 2, 3, 7, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 232, 0.2)',
                    'rgba(155, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 232, 1)',
                    'rgba(155, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: '經銷商',
                fontSize: 28
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

    //change dealers
    $(".dealers-dashboard #dealer, .dealers-dashboard #charts").on('change',function(e){
        dealer = $(".dealers-dashboard #dealer").val();
        console.log(dealer);
        if(dealer == "my-guitar-friend"){

            var dealers = document.getElementById('dealersChart').getContext('2d');
            var dealersChart = new Chart(dealers, {
                type: dealersChartType,
                data: {
                    labels: ['Carrera SJ', 'Carrera DS', 'Carrera DL', 'Carrera 000', 'Carrera 0-14', 'Dolphin I','Dolphin II SJ','Dolphin II DL'],
                    datasets: [{
                        label: '月銷售量',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [12, 19, 3, 5, 2, 3, 7, 8],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 232, 0.2)',
                            'rgba(155, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 232, 1)',
                            'rgba(155, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: '經銷商',
                        fontSize: 28
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

        } else if(dealer == "dolphin-guitars"){

            var dealers = document.getElementById('dealersChart').getContext('2d');
            var dealersChart = new Chart(dealers, {
                type: dealersChartType,
                data: {
                    labels: ['Carrera SJ', 'Carrera DS', 'Carrera DL', 'Carrera 000', 'Carrera 0-14', 'Dolphin I','Dolphin II SJ','Dolphin II DL'],
                    datasets: [{
                        label: '月銷售量',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [6, 9, 5, 7, 12, 13, 17, 10],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 232, 0.2)',
                            'rgba(155, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 232, 1)',
                            'rgba(155, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: '經銷商',
                        fontSize: 28
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
        }
    });

    //Sound Tunnel
    var bodyType = 'dreadnought';
    var soundTunnelChartType = 'line';

    //change charts
    $(".sound-tunnel-chart #charts").on('change',function(e){
        soundTunnelChartType = $(".sound-tunnel-chart #charts").val();
        console.log(soundTunnelChartType);
    });

    var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
    var soundTunnelChart = new Chart(soundTunnel, {
        type: soundTunnelChartType,
        data: {
            labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
            datasets: [{
                label: '月播放次數',
                labelClolr: 'rgba(75, 192, 192, 0.2)',
                data: [90, 150, 80, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: ['Sound Tunnel', bodyType],
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

    //change bodyTypes
    $(".sound-tunnel-chart #bodyType, .sound-tunnel-chart #charts").on('change',function(e){
        bodyType = $(".sound-tunnel-chart #bodyType").val();
        console.log(bodyType);
        if(bodyType == "dreadnought"){
            var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
            var soundTunnelChart = new Chart(soundTunnel, {
                type: soundTunnelChartType,
                data: {
                    labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
                    datasets: [{
                        label: '月播放次數',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [90, 150, 80, 50],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: ['Sound Tunnel', bodyType],
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
        } else if(bodyType == "om"){
            var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
            var soundTunnelChart = new Chart(soundTunnel, {
                type: soundTunnelChartType,
                data: {
                    labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
                    datasets: [{
                        label: '月播放次數',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [50, 100, 100, 90],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: ['Sound Tunnel', bodyType],
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
        } else if(bodyType == "ga"){
            var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
            var soundTunnelChart = new Chart(soundTunnel, {
                type: soundTunnelChartType,
                data: {
                    labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
                    datasets: [{
                        label: '月播放次數',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [100, 120, 80, 90],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: ['Sound Tunnel', bodyType],
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
        } else if(bodyType == "small-jumbo"){
            var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
            var soundTunnelChart = new Chart(soundTunnel, {
                type: soundTunnelChartType,
                data: {
                    labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
                    datasets: [{
                        label: '月播放次數',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [80, 120, 90, 70],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: ['Sound Tunnel', bodyType],
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
        } else if(bodyType == "parlor"){
            var soundTunnel = document.getElementById('soundTunnelChart').getContext('2d');
            var soundTunnelChart = new Chart(soundTunnel, {
                type: soundTunnelChartType,
                data: {
                    labels: ['Spruce', 'Maple', 'Rosewood', 'Mahogany'],
                    datasets: [{
                        label: '月播放次數',
                        labelClolr: 'rgba(75, 192, 192, 0.2)',
                        data: [70, 100, 90, 120],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: ['Sound Tunnel', bodyType],
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
        }
    });
});