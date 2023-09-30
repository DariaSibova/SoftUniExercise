function proba(input) {

let gradus = Number(input[0]);
let day = input[1];
let outfit ;
let shoes ;

if(gradus >= 10 && gradus <= 18){
    if(day == "Morning"){
        outfit = "Sweatshirt"
        shoes = "Sneakers"
    }else if (day == "Afternoon" || day == "Evening"){
        outfit = "Shirt";
        shoes = "Moccasins"
    }
}else if (gradus > 18 && gradus <= 24){
    if(day == "Morning" || day == "Evening"){
        outfit = "Shirt"
        shoes = "Moccasins"
    }else if (day == "Afternoon" ){
        outfit = "T-Shirt";
        shoes = "Sandals"
    }
} else {
    if(day == "Morning" ){
        outfit = "T-Shirt"
        shoes = "Sandals"
    }else if (day == "Afternoon" ){
        outfit = "Swim Suit";
        shoes = "Barefoot"
    }else {
        outfit = "Shirt"
        shoes = "Moccasins"
    }
}
console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`)






}


proba(["16","Morning"])
