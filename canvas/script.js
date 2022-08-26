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
ctx.arc(200,200,20,0,2 * Math.PI);
ctx.stroke();