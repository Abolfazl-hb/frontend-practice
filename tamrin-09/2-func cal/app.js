function calculator() {
    let inputNumber = Number(prompt("Enter Number 1-20 :"));
    if (inputNumber >= 1 && inputNumber <= 20) {
        for (let i = 1; i <= 10; i++) {
            console.log(inputNumber, "*", i, "=", inputNumber * i);
        }
    } else {
        console.log("Wrong Number...");
    }
}

calculator();
