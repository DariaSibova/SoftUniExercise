function solve(grade){
    if(grade < 3.00){
        console.log('Fail (2)');
    } else if( grade < 3.5){
        console.log(`Poor (${grade.toFixed(2)})`);
    }
}

solve(3.33);
// solve(4.50)
// solve(2.99)