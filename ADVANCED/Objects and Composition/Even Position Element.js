// function solve(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i += 2) {
//     result += arr[i];
//     result += " ";
//   }
//   console.log(result);
// }

function solve(arr){
  let result = [];

  for(let i = 0;i < arr.length;i += 2){
    result.push(arr[i]);

  }
  console.log(result.join(' '));
}

solve(['20', '30', '40','50', '60'])
solve(['5', '10'])