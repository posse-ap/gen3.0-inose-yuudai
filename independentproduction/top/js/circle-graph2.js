'use strict';

{
    let options = {
        series: [40, 20, 40],
        chart: {
            height: 400,
            type: 'donut',
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '55px',
                    labels: {
                        show: true,
                        total: {
                            showAlways: false,
                            show: false,
                            cutoutPercentage: 0,
                        }
                    }
                }
            }
        },
        labels: ["N予備校", "ドットインストール", "POSSE課題"],
        colors: ['#0445EC', '#0F70BC', '#20BDDE'],
        dataLabels: {
            style: {
                fontSize: '0.75rem',
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'bottom',
            fontSize: '15px',
        },
        responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        tooltips: { enabled: false },
    };
    let ctx = document.getElementById('circle-charts2')
    let chart = new ApexCharts(ctx, options);
    chart.render();
}