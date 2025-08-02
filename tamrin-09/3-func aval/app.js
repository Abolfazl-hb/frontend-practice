let inputNumber = Number(prompt("Enter Number :"));
function aval(input) {
    let counter = 0;
    for (let i = 1; i <= input; i++) {
        if (input === 1) {
            break;
        }
        if (input % i === 0) {
            counter++;
        }
    }

    if (counter === 2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
aval(inputNumber);
