'use strict'

//color generator
function colorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
};

const lbs = ['Jan', 'Feb','Mar', 'Apr', 'May','June'];

const differentColors = [];

for (let i = 0; i < lbs.length; i++){
    differentColors.push(colorGenerator());
};

console.log(differentColors);

//step 3
const data = {
    labels: lbs,
    datasets: [{
        label: 'My Class Training',
        backgroundColor: differentColors,
        borderColor: 'black',
        data: [15, 10, 25, 2, 20, 30],
}]
};

//step 2
const config = {
    type: 'bar',
    data: data,
    options:{}
};


//step 1
const myChart = new Chart(
    document.getElementById("chartz"),
    config
);
