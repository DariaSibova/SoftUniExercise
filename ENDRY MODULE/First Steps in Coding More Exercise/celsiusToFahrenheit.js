function solve(input){
let celsius = Number(input[0]);
let fahrenheit = celsius * 9/5 + 32;
console.log(fahrenheit.toFixed(2))
}

solve(["25"]);
// solve(["0"])
// solve(["-5.5"])
// solve(["32.3"])