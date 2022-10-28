'use strict';


let options = {
    series: [{
        name: '時間',
        data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8]
    }],
    legend: {
        display: false
    },
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false
        }
    },




    plotOptions: {
        bar: {
            columnWidth: '50%',
            // ↑グラフの太さ
            borderRadius: 5,
            // ↑グラフの先っちょ丸くする
            endingShape: 'rounded'
        }
    },

    dataLabels: {
        enabled: false
    },

    // グラフ一本一本には数値書き込まなくていいよ↑


    xaxis: {
        axisTicks: {
            show: false,
            // x軸の区切りいらない
            axisBorder: {
                show: false
            },

        },

        labels: {
            formatter: function(value) {
                if (value !== undefined) {

                    let day = value.split(" ")
                    return day % 2 == 1 ? "" : value;
                }
            },
            style: {
                colors: '#B5CDDE',
            }
        },
    },


    grid: {
        yaxis: {
            lines: {
                show: false
                    // 横線いらない
            },
        },
    },

    yaxis: {
        labels: {
            formatter: function(value) {
                return value + "h";
            },
            style: {
                colors: '#B5CDDE',
            }
        },
        type: 'category',
        axisTicks: {
            show: false,
            width: 1,
        }
    },

    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],


    fill: {
        colors: ["#0F71BB"],
        type: 'gradient',
        gradient: {
            type: 'vertical',
            gradientToColors: ['#74DAFF'],
        }
    },

    responsive: [{
        breakpoint: 768,
        options: {

            chart: {
                height: 200,
            }
        },
    }]

};



let chart = new ApexCharts(document.querySelector("#bar-graph"), options);
chart.render();