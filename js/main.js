let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.strokeStyle = none;
ctx.lineWidth = 5;
ctx.lineCap = "round";

function drawLine(){

}

let painting;
let last;
let isTouchDevice = 'ontouchstart' in document.documentElement;
if (isTouchDevice){
    canvas.ontouchstart = (e) =>{
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawLine(last[0],last[1],x,y)
    }
}
