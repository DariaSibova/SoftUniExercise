function sumNumbers(input){

    let index = 0;
    let findingNumber = Number(input[index]);
    index++;

    let sum = 0;

    while(true){
        if(sum >= findingNumber){
            break;
        }
        let currentNum = Number(input[index]);
    index++;
    sum += currentNum;
    }
    console.log(sum);

}

sumNumbers(["100", 
"10", "20", "30", "40"])