function solve(a,b,c){
 const largest = Math.max(a,b,c);

 console.log(`The largest number is ${largest}.`)
}

// function firstSolution(x, y, z) {
//     let result;
//     if (x >= y && x >= z) {
//     result = x;
//     } else if (y >= x && y >= z) {
//     result = y;
//     } else {
//     result = z;
//     }
//     console.log(`The largest number is ${result}.`);
//     }

// function secondSolution(...params) {
//     console.log(`The largest number is ${Math.max(...params)}.`);
//     }
    

solve(5, -3, 16);
solve(-3, -5, -22.5);