function solve(data){
    let result = [];
    let biggestOne = data.shift();
    result.push(biggestOne);

    data.forEach(x => {
        if(biggestOne <= x){
            biggestOne = x;
            result.push(biggestOne);
        }
    })

    return result;

}

console.log(solve([1, 3,8, 4, 10, 12, 3, 2, 24]))