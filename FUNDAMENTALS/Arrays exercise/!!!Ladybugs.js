// Given field size | size 3 -> [-,-,-] | size 5 [-,-,-,-,-]
// No ledybug -> 0 | ladybug -> 1
// Given initial ladybugs indeces -> size 3, indeces '0 2' -> [1,0,1]
// Commands -> "{ladybug index} {direction} {fly length}" -> "0 right 2"
// If ladybug lands an another -> continues in same direction with same length
function solve(arr){

}

solve([3,'0 1','0 right 1','2 right 1']);
// solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
// solve([ 5, '3', '3 left 2', '1 left -2'])