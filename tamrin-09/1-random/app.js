let randomNumber = parseInt(Math.random() * 100);
let inputNumber = Number(prompt("Enter Number 1-100:"));
let counter = 1;
while (counter < 10) {
    // console.log("counter = ", counter, "    inputNumber = ", inputNumber);
    if (inputNumber == randomNumber) {
        console.log("Right Number. Counter = ", counter);
        break;
    } else if (inputNumber > randomNumber) {
        inputNumber = prompt("Enter Smaller Number: ");
    } else if (inputNumber < randomNumber) {
        inputNumber = prompt("Enter Bigger Number: ");
    }
    counter++;
    if (counter == 10) {
        console.log("Failed. randomNumber = ", randomNumber);
    }
}
