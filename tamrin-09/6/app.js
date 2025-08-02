let inputNumber = Number(prompt("Enter Number :"));
// let n = 5;
function func(n) {
    for (let i = 1; i <= n; i++) {
        let text = "";
        for (let j = 1; j <= i; j++) {
            text = text + j * i + " ";
            // console.log(j * i);
        }
        console.log(text);
        // console.log("==============");
    }
}
func(inputNumber);
