function solve(arr){
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));
}

solve(['20', '30', '40']);
// solve(['5', '10'])