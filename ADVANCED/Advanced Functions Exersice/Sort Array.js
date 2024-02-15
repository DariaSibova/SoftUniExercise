function solve(arr,op){
    return op === "asc" ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a)
}