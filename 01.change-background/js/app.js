
// contains item
let colorText = document.getElementById('color-text');
let colorChangeBtn = document.getElementById('btn');


// event listeners
colorChangeBtn.addEventListener("click", () => {
    colorCodeGenerator();
})


// colorCodeGenerator function
let colorCodes = [1,2,0,"A",3,"B",5,"C",6,7,"D",8,"E",9,"F"];


function colorCodeGenerator(){
    let hexHash = '#';
    // color code
    for (let i = 0; i < 6; i++) {
        hexHash += colorCodes[randomColorGenerator()];
    }

    colorText.textContent=hexHash;
    colorText.style.color = hexHash;
    document.body.style.backgroundColor = hexHash;
    
}


// generate random number
function randomColorGenerator (){
    return Math.floor(Math.random() * colorCodes.length);
}
