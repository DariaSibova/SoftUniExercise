let arr = [10,20,30,40,50,60];
// console.log(arr.filter(() => true));
console.log(arr.filter(x => x % 20 == 0));
console.log(filter(arr,x => x % 20 == 0));
function filter(inputArr,predicate){
    let result=[]

    for (let item of inputArr){
        if(predicate(item)){
            result.push(item);

        }
    }
    return result
}