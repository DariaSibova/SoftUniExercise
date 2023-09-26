function lunchBreak(input){
      
    let filmName = input[0];
    let duration = Number(input[1]);
    let lunchBreak = Number(input[2]);
 
    let lunchTime = lunchBreak / 8;
    let relaxTime = lunchBreak / 4;
    let freeTime = lunchBreak - lunchTime - relaxTime;
 
    if (freeTime >= duration){
     console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(freeTime - duration)} minutes free time.`);
    } else {
     console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(duration - freeTime)} more minutes.`);
    }
    
     
 }

 lunchBreak(["Game of Thrones",

 "60",
 
 "96"])