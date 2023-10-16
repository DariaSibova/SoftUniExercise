function solve(n,exponent){
    let product = 1;

    for(let i =0;i < exponent;i++){
        product *= n;
    }

    console.log(product)
}




solve(2,8);
// solve(3,4)