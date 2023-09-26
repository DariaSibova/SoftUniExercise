function trekkingMania(input){

    let groups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0

    for(let i =1;i <= groups;i++){
        let currentGroup = Number(input[i]);

        if(currentGroup <= 5){
            musala++
        }else if(currentGroup <= 12){
            monblan++
        } else if(currentGroup <= 25){
            kilimanjaro++
        }else if(currentGroup <= 40){
            k2++
        }else {
            everest++;
        }
    }
    let total = musala + monblan + kilimanjaro + k2 + everest;

    console.log(`${(musala / total * 100).toFixed(2)}%`);
    console.log(`${(monblan / total * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);

    
}
trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])