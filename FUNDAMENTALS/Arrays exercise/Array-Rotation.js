function solve(arr,rotationCount){

    for(let rotation = 1;rotation <= rotationCount;rotation++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2)
// solve([32, 21, 61, 1], 4)
// [2, 4, 15, 31], 5