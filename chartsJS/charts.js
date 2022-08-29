'use strict'

const data = {
    labels: lables,
    datasets: [{
        label: 'My Class Training',
        backgroundColor:
    [   'black',
        'green',
        'orange',
        'red',
        'yellow',
        'purple',  ],

        borderColor: 'black',
        data: [10, 10, 5, 2, 20, 30, 45],
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById(myChart),
    config
);