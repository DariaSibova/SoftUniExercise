function solve(nums){
    let n = nums.length
    //create new array and copy n values in reverse 
    let reversed=[];

    for(let i = n - 1;i >= 0;i--){
        reversed.push(nums[i]);

    }
    //print result on single line
    console.log(reversed.join(' '))
}
solve(['a', 'b', 'c', 'd', 'e'])
// solve(['abc', 'def', 'hig','klm', 'nop'])