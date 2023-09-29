function numbersDivisibleBy9(input){
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let sum = 0;

    for ( let i = startInterval; i <= endInterval; i++){
        if (i % 9 === 0){
            sum += i;
        }
    }
    console.log("The sum: " + sum);

    for(let i = startInterval; i <= endInterval; i++){
        if (i % 9 === 0 ){
            console.log(i);
        }
    }
}

numbersDivisibleBy9 (["100", "200"])