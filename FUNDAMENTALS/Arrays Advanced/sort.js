let arr = [3,5,1,7,0,11];

// arr => arr.sort((a,b) => a - b).slice(0,2).join(' ');

console.log(arr);
arr.sort(compare);

console.log(arr);
// arr.sort((a,b) => a - b);
function compare(a,b){
    return a - b;
}

// function compare(a,b){
//     if(a > b){
//         return 1;

//     } else if(a < b){
//         return -1;

//     } else {
//         return 0;
//     }
// }