'use strict'

let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

// rectangle
ctx.fillStyle = "red";
ctx.fillRect(0,0,150,75);

//line
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

//circle
ctx.beginPath();
ctx.arc(200,200,100,0,2 * Math.PI);
ctx.stroke();

//gradient
let grd = ctx.createLinearGradient (0,0,600,250);
grd.addColorStop(0,"red");
grd.addColorStop(0.1,"blue");
grd.addColorStop(0.2,"green");
grd.addColorStop(0.3,"yellow");
grd.addColorStop(0.5,"white");
grd.addColorStop(0.6,"yellow");
grd.addColorStop(0.7,"green");
grd.addColorStop(0.8,"blue");
grd.addColorStop(1,"red");

//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,400,600,200);

//text
ctx.font = "30px Arial";
ctx.fillText("Hello World", 400,50);
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 400,100);