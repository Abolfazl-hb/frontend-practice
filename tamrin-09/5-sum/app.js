let inputNumber = Number(prompt("Enter Number :"));
function sum(input) {
    let c = 0;
    while (parseInt(input / 10) > 0) {
        // console.log(input % 10);
        c = c + (input % 10);
        input = parseInt(input / 10);
    }
    if (input < 10) {
        c += input;
        // console.log(input);
    }
    console.log(c);
}
sum(inputNumber);
