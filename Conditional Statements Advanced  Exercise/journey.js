function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 100){
        console.log(" Somewhere in Bulgaria");
        if (season === "summer "){
            let res = budget * 0.30;
            console.log(`Camp - ${res.toFixed(2)}`);
        } else {
            let res = budget * 0.70;
            console.log(`Hotel - ${res}`);
        }
    } else if (budget <= 1000){
        console.log("Somewhere in Balkans");
        if (season === "summer"){
            let res = budget * 0.40;
            console.log(`Camp - ${res.toFixed(2)}`);
        } else {
            let res = budget * 0.80;
            console.log(`Hotel - ${res}`);
        }
    } else {
        console.log("Somewhere in Europe");
        let res = budget * 0.90;
        console.log(`Hotel - ${res}`);
    }
}



journey(["50", "summer"])