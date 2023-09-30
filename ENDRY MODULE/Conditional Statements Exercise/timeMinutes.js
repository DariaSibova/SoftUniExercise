function proba(input){
  
    let hourA = Number(input[0]);
    let minuteA = Number(input[1]);

    let total = hourA * 60 + minuteA;
    let extra = total + 15;

    let hour = Math.floor(extra / 60)
    let minutes = extra % 60;

    if (hour >= 24){
        hour %= 24;
       
    }
    if(minutes < 10){
        console.log(`${hour}:0${minutes}`)
        
    }else {
        console.log(`${hour}:${minutes}`)
    }
    

}

