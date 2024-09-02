decreaseButton = document.getElementById("decrease");
resetButton = document.getElementById("reset");
increaseButton = document.getElementById("increase");
currentNumber = document.getElementById('currentNumber');
let count = 0;



decreaseButton.addEventListener('click', function() {
    count--;
    currentNumber.textContent = count;
})  


resetButton.addEventListener('click', function() {
    count = 0;
    currentNumber.textContent = count;
})  


increaseButton.addEventListener('click', function() {
    count++;
    currentNumber.textContent = count;
})  
