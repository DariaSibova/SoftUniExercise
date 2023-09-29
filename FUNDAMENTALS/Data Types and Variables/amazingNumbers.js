function solve(num){
// num = num.toString();
// let sum = 0
// for(let i = 0;i < num.length;i++){
//     sum += Number(num[i]);
// }
// let result = sum.toString().includes('9');
// console.log(result ?
//     `${num} Amazing? True` :
//     `${num} Amazing? False`);

let numAsString = String(num);
let sum = 0;

for(let i =0;i < numAsString.length;i++){
    sum += Number(numAsString[i]);

}
let sumAsString = String(sum);
let isAmazing = 'False';

for(let i =0;i< sumAsString.length;i++){
    if(sumAsString[i] == '9'){
        isAmazing = 'True';
    }
}
console.log(`${num} Amazing? ${isAmazing} `);
}

solve(1233);
// solve(999);