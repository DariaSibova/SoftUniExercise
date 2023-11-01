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
    //print result
    console.log(result)
}
solve(['7', '-2', '8', '9']);