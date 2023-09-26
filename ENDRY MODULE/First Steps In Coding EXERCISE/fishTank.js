function fishTank (input){

    let length = Number (input[0]);
    let width = Number (input[1]);
    let height = Number (input[2]);
    let occupiedSpace = Number (input[3]);
    let occupiedSpacePercents = occupiedSpace / 100;

    let tankVolume = length * width * height;
    let tankVolumeLitters = tankVolume / 1000;
    let littersNeeded = tankVolumeLitters * (1 - occupiedSpacePercents);
    console.log(littersNeeded);

}

fishTank(["85 ","75 ","47 ","17 "])