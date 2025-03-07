/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */


document.getElementById("change-btn").addEventListener("click",function(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    let hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

    document.getElementById("root").style.backgroundColor=hexColor;

    document.getElementById("output").value= hexColor;
})