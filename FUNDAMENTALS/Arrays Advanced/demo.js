let arr = [10,20,30,40];
console.log(arr, arr.length);

arr.push(50,60);
console.log(arr, arr.length);

let num = arr.pop();
console.log(arr, arr.length);
console.log(num);
console.log('----------------')

arr.unshift(0);
console.log(arr, arr.length);

let num2 = arr.shift();
console.log(arr, arr.length)
console.log(num2)
console.log('-------------')

console.log(arr.includes(40));
console.log(arr.includes(35));
console.log(arr.indexOf(40));
console.log(arr.indexOf(35));

