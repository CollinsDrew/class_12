'use strict'

//color generator
function colorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(colorGenerator());

const labels = ['Jan', 'Feb','Mar', 'Apr', 'May','June'];

//step 3
const data = {
    labels: ['Jan', 'Feb','Mar', 'Apr', 'May','June'],

}

//step 2
const config ={
    type: 'bar',
    data: data,
    options:{}
};

//step 1
const myChart = new Chart(
    document.getElementById('myChart2'),
    config
);