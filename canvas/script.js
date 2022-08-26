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
let grd = ctx.createLinearGradient (0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(0.25,"blue");
grd.addColorStop(0.5,"yellow");
grd.addColorStop(1,"green");

//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(100,400,150,80);