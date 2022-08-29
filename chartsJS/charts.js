'use strict'

function colorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}

console.log(colorGenerator());

const data = {
    labels: ['a','b','c','d','e','f'],
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
    type: 'doughnut',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);