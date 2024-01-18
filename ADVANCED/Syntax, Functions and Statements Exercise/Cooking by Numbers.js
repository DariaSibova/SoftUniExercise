function solve(numAsString,op1,op2,op3,op4,op5){
    let num = Number(numAsString);
    let op = [op1,op2,op3,op4,op5]

    for (let i = 0; i < op.length; i++){
        switch(op[i]){
            case "chop": num /= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num += 1; break;
            case "bake": num *= 3; break;
            case "fillet": num *= 0.80; break;
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake','fillet')