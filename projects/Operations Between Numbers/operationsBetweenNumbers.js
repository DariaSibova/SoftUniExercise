function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];

    let result = 0;

    if(op === "+" || op === "-" || op === "*"){
        if (op === "+"){
            result = n1 + n2; 
        } else if (op === "-"){
            result = n1 - n2;
        }else {
            result = n1 * n2; 
        }
        if (result % 2 === 0){
            console.log(` ${n1} ${op} ${n2} = ${result} - even`);
        } else {
            console.log(` ${n1} ${op} ${n2} = ${result} - odd`);
        }
    } else if  ( n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
    } else if (op === "/"){
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
    }

}

operationsBetweenNumbers(["10",

    "12",

    "+"])