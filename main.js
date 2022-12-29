var mouseEvent = "";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("canbutt");
ctx=canvas.getContext("2d");

color="black";
bgc="white";
widthoftheline=1;

canvas.addEventListener("mousedown",mousydown);

function mousydown(e)
{
    color=document.getElementById("color").value;
    widthoftheline=document.getElementById("width").value;
    bgc=document.getElementById("bgc").value;
    document.getElementById("canbutt").style.backgroundColor=bgc;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",mousymove);
function mousymove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthoftheline;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
function clearcanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mouseleave",mousyleave)
function mousyleave(e)
{
     mouseEvent = "mouseleave";
}
//touchevent
canvas.addEventListener("touchstart",touchystart);

function touchystart(e)
{
    color=document.getElementById("color").value;
    widthoftheline=document.getElementById("width").value;
    bgc=document.getElementById("bgc").value;
    document.getElementById("canbutt").style.backgroundColor=bgc;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",touchymove);
function touchymove(e)
{
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthoftheline;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}