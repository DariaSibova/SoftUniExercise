// Given field size | size 3 -> [-,-,-] | size 5 [-,-,-,-,-]
// No ledybug -> 0 | ladybug -> 1
// Given initial ladybugs indeces -> size 3, indeces '0 2' -> [1,0,1]
// Commands -> "{ladybug index} {direction} {fly length}" -> "0 right 2"
// While ladybug lands an another -> continues in same direction with same length
// If out of field -> it's gone
// If no ladybugs on given index -> nothing happens

function solve(arr) {
  let fieldSize = arr[0];
  let ladybugIdxs = arr[1].split(" ").map(Number);
  let field = [];

  for (let i = 0; i < fieldSize; i++){
    if(ladybugIdxs.includes(i)){
      field[i] = 1;
    } else {
      field[i] = 0;
    }
  }
  
  for ( let j = 2; j < arr.length; j++){
    let command = arr[j];
    let tokens = command.split(' ');

    let ledybugIdx = Number(tokens[0]);
    let direction = tokens[1];
    let flyLength = Number(tokens[2]);
  }
}

solve([3, "0 1", "0 right 1", "2 right 1"]);
// solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
// solve([ 5, '3', '3 left 2', '1 left -2'])
