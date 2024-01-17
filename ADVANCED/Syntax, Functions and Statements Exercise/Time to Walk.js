function solve(steps,footprint,speed){
    let distance = steps * footprint;
    let speedMeterInSec = speed / 3.6;
    let time = distance / speedMeterInSec;
    let rest = Math.floor(distance / 500);
    time += rest * 60; 

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(min /60);
    min -= hours * 60;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`)
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);