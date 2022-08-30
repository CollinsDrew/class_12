'use strict'

//change graph button
const differentCharts = ['doughnut','bar'
,'bubble','pie','line',
'radar','polarArea','scatter'];

let myChart;

function initiateChart() {

  if(myChart){
    myChart.destroy();
  }


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

//change graph button
function getChart(){
    
    return Math.floor(Math.random()*8);}

//step 2
const config = {
    type: differentCharts[getChart()],
    data: data,
    options:{}
};


//step 1
myChart = new Chart(
    document.getElementById("chartz"),
    config
);

}