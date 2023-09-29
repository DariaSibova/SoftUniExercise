function onTimeForTheExam(input){
    
let hoursExam = Number(input[0]);
let minExam = Number(input[1]);
let hourArrive = Number(input[2]);
let minArrive = Number(input[3]);

let timeExam = hoursExam * 60 + minExam;
let timeArrive = hourArrive * 60 + minArrive;


if (timeArrive < timeExam && (timeExam - timeArrive > 30)){
    console.log("Early");
    let diff = timeExam - timeArrive;
    let h = Math.floor(time / 60);
    let min = time % 60;
    if (h > 0 ){
        if (min < 10){
            console.log(`${h}:0${min} hours before the start`);
        } else{
            console.log(`${h}:${min} hours before the start`);
        }
    } else {
        console.log(`${min} minutes before the start`);
    }
} else if (timeArrive < timeExam){
    console.log("On time");
} else {
    console.log("Late");
}
}

onTimeForTheExam(["9",

"30",

"9",

"50"])