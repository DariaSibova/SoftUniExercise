function mountainRun (input){

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeInSecForOneM = Number(input[2]);

    let totalTime = distanceInM * timeInSecForOneM
    let extraTime = Math.floor(distanceInM / 50) * 30

    totalTime += extraTime

    if(totalTime < recordInSec){
console.log(` Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    }else {
        let diff = Math.abs(totalTime - recordInSec)
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}