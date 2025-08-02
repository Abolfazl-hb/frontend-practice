let inputNumber = Number(prompt("Enter Number :"));
function counter(input) {
    if (input > 0) {
        let c = 1;
        while (parseInt(input / 10) > 0) {
            input = parseInt(input / 10);
            c++;
        }
        console.log(c);
    } else {
        console.log("Wrong Number");
    }
}
counter(inputNumber);
