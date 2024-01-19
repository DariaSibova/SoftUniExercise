function solve(arr) {
    arr.sort((a,b) => a.localeCompare(b))
    .forEach((value,i) => {
        console.log(`${i + 1}.${value}`);
    }) 
}

solve(["John",

"Bob",

"Christina",

"Ema"])