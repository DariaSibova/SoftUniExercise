// George asked you to buy the needed items 
//how many students  will sign up for the course
//- one student = 1 pac flour , 10 eggs and an apron
// the aprons get dirty often  = buy 20 % more rounded up to the next integer
// also every fifth pac of flour is free.
//the input data will always be valid 

//if the calcu. price of the items is LESS or EQUEL to the budget : Items purchased for ${the cost  of the items}$.
//if the calc.price is more than the budget :
// ${neededMoney}$ more needed


function cookingMasterclass(input){
let budget = input[0];
let students = input[1];
let flourPrice = input[2];
let eggPrice = input[3];
let apronPrice = input[4];

let priceForApron = students + 0.20;
let priceForApronMath = (Math.ceil(priceForApron))


let freePac = 0;
freePac = Math.floor((students / 5));



let priceForOnePerson = (apronPrice * priceForApronMath) + (eggPrice * 10 * students) + flourPrice * (students - freePac);


if (priceForOnePerson <= budget){
    console.log(`Items purchased for ${priceForOnePerson.toFixed(2)}$.`);
} else if(priceForOnePerson > budget){
    console.log(`${(priceForOnePerson - budget).toFixed(2)}$ more needed.`)
}
}

// cookingMasterclass([50,2,1.0,0.10,10.0]);
// cookingMasterclass([100,25,4.0,1.0,6.0])
cookingMasterclass([946,20,12.05,0.42,27.89])