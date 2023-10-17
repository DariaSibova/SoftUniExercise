function solve(a, b, operator) {
  if (operator == "add") {
    console.log(a + b);
  } else if (operator == "subtract") {
    console.log(a - b);
  } else if (operator == "multiply") {
    console.log(a * b);
  } else if (operator == "divide") {
    console.log(a / b);
  }
}

solve(5, 5, "multiply");
// solve(40,8,'divide')
// solve(12,19,'add')
// solve(50,13,'subtract')
