function spaceship(input){
let firstRowWidth = Number(input[0]);
let secondRowLength = Number(input[1])
let thirdRowHight = Number(input[2]);
let fourthRowHeightOfTheAstronauts = Number(input[3]);

let volumeOfTheRocket = firstRowWidth * secondRowLength * thirdRowHight
let volumeRoom = (fourthRowHeightOfTheAstronauts + 0.40) * 2 * 2
let astronaut = Math.floor(volumeOfTheRocket / volumeRoom);



if(astronaut >= 3 && astronaut <= 10){
    console.log(`The spacecraft holds ${astronaut} astronauts.`)
}else if(astronaut < 3){
    console.log(`The spacecraft is too small.`)
}else {
    console.log(`The spacecraft is too big.`)
}
}

// spaceship(["3.5",
// "4",
// "5",
// "1.70"])

// spaceship (["4.5",
// "4.8",
// "5",
// "1.75"])
spaceship(["3",
"3",
"4",
"1.68"])


