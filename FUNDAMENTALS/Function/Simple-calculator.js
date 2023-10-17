function solve(a, b, operator) {
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;

  let operations = [
    add,
     subtract,
      multiply, 
      divide];

  let operatoinNames = [
    "add",
   "subtract",
    "multiply",
     "divide"];

  let index;

  for (let i = 0; i < operatoinNames.length; i++) {
    if (operatoinNames[i] == operator) {
      index = i;
    }
  }

  let operation = operations[index];
  console.log(operation(a, b));
}

//_______________________________________
// function solve(a, b, operator) {
//   let add = (a, b) => a + b;
//   let subtract = (a, b) => a - b;
//   let multiply = (a, b) => a * b;
//   let divide = (a, b) => a / b;

//   let result;

//   switch (operator) {
//     case "add":
//       result = add(a, b);
//       break;
//     case "subtract":
//       result = subtract(a, b);
//       break;
//     case "multiply":
//       result = multiply(a, b);
//       break;
//     case "divide":
//       result = divide(a, b);
//       break;
//   }
//   console.log(result);
// }
//------------------------------------
// function solve(a, b, operator) {
//   let result;

//   switch (operator) {
//     case "add":
//       result = a + b;
//       break;
//     case "subtract":
//       result = a - b;
//       break;
//     case "multiply":
//       result = a * b;
//       break;
//     case "divide":
//       result = a / b;
//       break;
//   }
//   console.log(result);
// }
//------------------------------------------
// function solve(a, b, operator) {
//   if (operator == "add") {
//     console.log(a + b);
//   } else if (operator == "subtract") {
//     console.log(a - b);
//   } else if (operator == "multiply") {
//     console.log(a * b);
//   } else if (operator == "divide") {
//     console.log(a / b);
//   }
// }
//------------------------------
// function solve(a,b,operator){
//   switch(operator){
//     case 'add':
//       console.log(a + b);
//       break;
//       case 'subtract':
//         console.log(a - b);
//         break;
//         case 'multiply':
//       console.log(a * b);
//       break;
//       case 'divide':
//       console.log(a / b);
//       break;
//   }
// }

solve(5, 5, "multiply");
// solve(40,8,'divide')
// solve(12,19,'add')
// solve(50,13,'subtract')
