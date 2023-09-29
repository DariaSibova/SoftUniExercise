function tennisRanklist(input){
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    for(let i = 2; i < input.length ; i++){
let currentStage = input[i];

switch(currentStage){
    case 'W':winPoints += 2000;
    wins++;
    break;
    case 'F':winPoints += 1200;break;
    case 'SF':winPoints += 720;break;

}
    }
    console.log(startingPoints)
}

tennisRanklist(["5",
"1400",

"F",

"SF",

"W",

"W",

"SF"])
