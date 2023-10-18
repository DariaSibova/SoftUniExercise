function perfectNum(num){
    let sumProperDivisors = 0;

    for(let divisor = 1;divisor < num; divisor++){
        if(num % divisor == 0){
            sumProperDivisors += divisor;
        }
    }

    if(sumProperDivisors == num ){
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}


perfectNum (6);
// perfectNum(28)
// perfectNum(1236498)