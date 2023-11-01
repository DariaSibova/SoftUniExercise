// console.log(arr.map(x => x / 2));

console.log(arr.map(x => x + 1));
console.log(map(arr,x => x + 1));

function map(inputArr,func){
    let result = []
    for(let item of inputArr){
        let newItem = func(item);
        result.push(newItem)
    }
    return result;
}