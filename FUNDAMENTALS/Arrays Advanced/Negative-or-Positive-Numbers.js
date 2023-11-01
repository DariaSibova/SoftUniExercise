function solve(arr){
    let result = [];

    //for each element of input arrays
    //-check if current number is negative
    //-- if yes,add to beginning
    //--otherwise,add to end

    
    for(let numAsString of arr){
        let num = Number(numAsString);

        if(num < 0){
            result.unshift(num);

        }else {
            result.push(num);
        }
    }

    // for(let i = 0;i < arr.length;i++){
    //     if(arr[i] < 0){
    //        result.unshift(arr[i]);
    //     } else {
    //         result.push(arr[i]);
    //     }
    // }
    // console.log(result.join('\n'))
    for(let num of result){
        console.log(num)
    }

}
solve(['7', '-2', '8', '9']);