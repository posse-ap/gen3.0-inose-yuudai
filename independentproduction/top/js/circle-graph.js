'use strict';







{
    let options = {
        series: [30, 20, 10, 5, 5, 20, 20, 10],
        chart: {
            height: 400,
            type: 'donut',
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


        states: {
            hover: {
                filter: 'none'
            }
        },
        stroke: {
            width: 0,
        },
        labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "情報システム基礎知識(その他)"],
        colors: ['#0445EC', '#0F70BC', '#20BDDE', '#3CCEFE', '#B29EF3', '#6C46EB', '#4A17EF', '#3005C0'],

        dataLabels: {
            style: {
                fontSize: '0.75rem',
            }
        },

        legend: {
            position: 'bottom',
            horizontalAlign: 'left',
            fontSize: '15px',
        },



        responsive: [{
            breakpoint: 768,
            options: {
                plotOptions: {
                    pie: {
                        offsetY: 0,

                    }
                },


                title: {
                    style: {
                        fontSize: '13px',
                        color: '#263238'
                    }
                },
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

    let ctx = document.getElementById('circle-charts1')
    let chart = new ApexCharts(ctx, options);

    chart.render();
}