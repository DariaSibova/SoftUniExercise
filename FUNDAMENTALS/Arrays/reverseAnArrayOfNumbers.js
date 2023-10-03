// function solve(n,nums){
// //create new array
// let result = [];

// //copy n values from given aray to new array
// for (let i = 0;i < n; i++){
//  result.push(nums[i]);
// }

// //reverse resulting array
// let reversed = [];
// for (let i = n - 1;i >= 0 ;i--){
// reversed.push(result[i])
// }

// //print result on single line
// console.log(result.join(' '))
// }

// function solve(n,nums){
//     let result = '';
//     for(let i = n - 1;i >= 0;i--){
//         result += number[i] + ' '
//     }
//     console.log(result)
// }

function solve(n,nums){
    //create new array

    //copy n values in reversed
    let reversed = [];
    for(let i = n - 1;i >= 0;i--){
        reversed.push(nums[i]);
    }

    //print result on single line 
    console.log(reversed.join(' '))
}

solve(3,[10,20,30,40,50])