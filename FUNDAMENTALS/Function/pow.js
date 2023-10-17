function power (n,exponent){
    let product = 1;

    for(let i = 0;i < exponent;i++){
        product *= n;
    }

    console.log(product);

}

function recursivePower(n,exponent){
    if(exponent == 0){
        return 1;
    } else if(exponent ==1){
        return n;

    } else {
        return n * recursivePower(n,exponent - 1);
    }
}
console.log(recursivePower(2,8));//256
console.log(recursivePower(3,4));//81
console.log(recursivePower(4,5));//1024

