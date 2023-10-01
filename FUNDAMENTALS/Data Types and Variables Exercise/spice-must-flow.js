function solve(currentYield){
//initialize result variables
let spice = 0;
let days = 0;

//each day check if source is profitable,if so:
while(currentYield >= 100){
    //mine yield and add to result
    // -- reduce yield
    // -- consume spice
    days ++;
    spice += currentYield - 26;
    currentYield -= 10;
    //-- otherwise
    //-- stop mining;
}

// at end of operation, consume spice, if available
if (spice >= 26){
    spice -= 26;
}

//print result
console.log(days);
console.log(spice);


}

solve(111);
// solve(450)