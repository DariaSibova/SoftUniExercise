// George asked you to buy the needed items 
//how many students  will sign up for the course
//- one student = 1 pac flour , 10 eggs and an apron
// the aprons get dirty often  = buy 20 % more rounded up to the next integer
// also every fifth pac of flour is free.
//the input data will always be valid 

//if the calcu. price of the items is LESS or EQUEL to the budget : Items purchased for ${the cost  of the items}$.
//if the calc.price is more than the budget :
// ${neededMoney}$ more needed


function cookingMasterclass(input) {
    let budget = input[0];
    let students = input[1];
    let flourPrice = input[2];
    let eggPrice = input[3];
    let apronPrice = input[4];
  
    let priceForApron = Math.ceil(students * 1.2); 
  
    let freePac = Math.floor(students / 5); 
  
    let totalCost = (apronPrice * priceForApron) + (eggPrice * 10 * students) + (flourPrice * (students - freePac));
  
    if (totalCost <= budget) {
      console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
    } else if (totalCost > budget) {
      console.log(`${(totalCost - budget).toFixed(2)}$ more needed.`);
    }
  }

cookingMasterclass([50,2,1.0,0.10,10.0]); // Items purchased for 34.00$.
cookingMasterclass([100,25,4.0,1.0,6.0]) // 410.00$ more needed.
// cookingMasterclass([946,20,12.05,0.42,27.89]) // 0.16$ more needed.