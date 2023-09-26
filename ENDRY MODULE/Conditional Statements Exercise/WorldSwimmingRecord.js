function worldSwimmingRecord(input){
    
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let timeSwim = distance * time;
    let timeSwimExtra = Math.floor(distance / 15) * 12.5;
    let totalTime = timeSwim + timeSwimExtra;

    if (totalTime < recordTime){
        console.log (`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log (`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord (["10464",

"1500",

"20"])
