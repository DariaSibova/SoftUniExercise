// function solve(grade) {
//   if (grade < 3) {
//     console.log("Fail (2)");
//   } else if (grade < 3.5) {
//     console.log(`Poor (${grade.toFixed(2)})`);
//   } else if(grade < 4.5){
//     console.log(`Good (${grade.toFixed(2)})`);
//   } else if(grade < 5.5){
//     console.log(`Very good (${grade.toFixed(2)})`);
//   } else {
//     console.log(`Excellent (${grade.toFixed(2)})`);
//   }
// }

function solve(grade) {
  let label;

  if (grade < 3) {
    label = "Fail";
    grade = 2;
  } else {
    if (grade < 3.5) {
      label = "Poor";
    } else if (grade < 4.5) {
      label = "Good";
    } else if (grade < 5.5) {
      label = "Very good";
    } else {
      label = "Excellent";
    }
    grade = grade.toFixed(2);
  }
  console.log(`${label} (${grade})`);
}

solve(3.33);
// solve(4.50)
// solve(2.99)
