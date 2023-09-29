function solve(num1,num2,num3){
// let sum = num1 + num2 + num3;

// sum % 1 === 0? sum += ' - Integer' : sum += ' - Float';
// console.log(sum)
let sum = num1 + num2 + num3;
let sumAsString = String(sum);
let isFloat = false;

for(let i =0;i < sumAsString.length;i++){
    if(sumAsString[i] == '.'){
        isFloat = true;
    }
}
console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`)
}

solve(9,100,1.1);
// solve(100,200,303);