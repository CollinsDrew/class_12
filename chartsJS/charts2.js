'use strict'

//change graph button
const differentCharts = ['doughnut','bar'
,'bubble','pie','line',
'radar','polarArea','scatter'];

let month;
let dataValue;

const lbs = [];
const dataArray = [];

let myChart;




//form
function formSubmitted(event){
    event.preventDefault();
    month = event.target.month.value;
    dataValue = event.target.dataValue.value;

    lbs.push(month);
    dataArray.push(parseInt(dataValue));

    //storage

    localStorage.setItem("month", month);
    localStorage.setItem("dataValue",dataValue);
    
    document.getElementById("result").innerHTML = localStorage.getItem("month");
    document.getElementById("result2").innerHTML = localStorage.getItem("dataValue");

}


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
        data: dataArray,
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