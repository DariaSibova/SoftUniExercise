let arr = [10,20,30,40,50];
console.log(includes(arr,20));
console.log(indexOf(arr,20));
console.log(slice(arr,1,-1));
console.log(slice(arr,1,3));
console.log(join(arr, ' -- '));



function includes(inputArr,element){
    for(let item of inputArr){
    if(item === element){ 
        return true

    }
    }
    return false;
}

function indexOf(inputArr,element){
    for(let i = 0;i < inputArr.length;i++){
        if(inputArr[i] === element){
            return i;
        }
    }
    return -1;
}
function slice(inputArr,start,end){
    let result = [];

    if(start < 0){
        start += inputArr.length;
    }
    if(end < 0){
        end += inputArr.length
    }
    for(let i = start;i < end;i++){
result[result.length] = inputArr[i];
    }
    return result
}

function join(inputArr,str){
    let result = '';
    for(let i = 0;i < inputArr.length - 1;i++){
        result += String(inputArr[i]);
        result += str;
    }
    if(inputArr.length > 0){
        result += inputArr[inputArr.length - 1];

    }

   return result;
}