
// contains tag
let countNumber = document.querySelector('.count-number');
let increaseBtn = document.querySelector('.increase-btn');
let resetBtn = document.querySelector('.reset-btn');
let decreaseBtn = document.querySelector('.decrease-btn');


// ============== contain listeners ============= 
increaseBtn.addEventListener("click", () => {
    // increaseNumber();
    makeCounter('+');

})

decreaseBtn.addEventListener('click', () => {
    // decreaseNumber();
    makeCounter('-');

})

resetBtn.addEventListener("click", () => {
    // resetNumber();
    makeCounter('remove')

})


// global variable for count
let count = 0;



// counter
function makeCounter(operation){
    if(operation === '+'){
        count++;
    }else if(operation == '-'){
        count--;
    }else{
        count = 0;
    }

    countNumber.innerText = count;
    colorGenerator(count);
}

// color generator
function colorGenerator(count){
    if(count == 0){
        countNumber.style.color = '#000';
    }else if(count > 0){
        countNumber.style.color = 'green';
    }else{
        countNumber.style.color = 'red';
    }
}












// // for increase number
// function increaseNumber(){
//     count = count + 1;
//     countNumber.innerText = count;
// }

// // for decrease number
// function decreaseNumber(){
//     count = count - 1;
//     countNumber.innerText = count;
// }

// // for reset number

// function resetNumber(){
//     count = 0;
//     countNumber.innerText = count;
// }

