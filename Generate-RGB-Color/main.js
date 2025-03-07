/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

document.getElementById("change-btn").addEventListener("click", function(){
    const body =document.getElementById("body");
    const red = Math.floor(Math.random()*255); 
    const green = Math.floor(Math.random()*255); 
    const blue = Math.floor(Math.random()*255); 

    let color = `rgb(${red},${green}, ${blue})`;

    body.style.backgroundColor = color;
    
})