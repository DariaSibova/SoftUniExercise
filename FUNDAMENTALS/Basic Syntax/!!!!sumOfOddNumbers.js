
function solve(n){
let totalSum = 0;

    for(let i = 1; i <= n;i += 1)
    if(i % 2 !== 0){
        console.log(i)
        
    }
    
    console.log(`Sum: ${totalSum}`);
}


//Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
//You will receive a number – n. This number shows how many odd numbers you should print
//Print the next n odd numbers, starting from 1, separated by newlines.

//On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`


solve(5);
// solve(3);