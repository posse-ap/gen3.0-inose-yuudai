'use strict';


let options = {
    series: [{
        data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8]
    }],
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
        }
    },

    dataLabels: {
        enabled: false
    },

    // グラフ一本一本には数値書き込まなくていいよ↑


    xaxis: {
        axisTicks: {
            show: false
                // x軸の区切りいらない
        },

        labels: {
            formatter: function(value) {
                if (value !== undefined) {
                    const categories = value.split(" ")
                    const day = categories[0]
                    return day % 2 == 1 ? "" : value;
                }
            },
            style: {
                colors: '#6ba0f0'
            },
        },
    },


    grid: {
        yaxis: {
            lines: {
                show: false
            },
        },
    },

    yaxis: {
        labels: {
            formatter: function(value) {
                return value + "h";
            },
            style: {
                colors: '#6ba0f0',
            }
        },
        type: 'category',
        axisTicks: {
            show: false,
            width: 1,
        }
    },

    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
};



let chart = new ApexCharts(document.querySelector("#bar-graph"), options);
chart.render();