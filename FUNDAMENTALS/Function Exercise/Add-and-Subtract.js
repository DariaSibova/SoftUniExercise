// function solve(num1, num2, num3) {
//   let result1 = sum(num1, num2);
//   let result2 = subtract(result1, num3);
//   console.log(result2);

//   function sum(num1, num2) {
//     return num1 + num2;
//   }
//   function subtract(num1, num2) {
//     return num1 - num2;
//   }
// }

function solve(num1,num2,num3){
  let sum =(a,b) => a + b;
  let subtract = (a,b) =>a - b;
  let result1 = sum(num1, num2);
  let result2 = subtract(result1, num3);
  console.log(result2)
}

solve(23, 6, 10);
// solve(1,17,30)
// solve(42,58,100)
