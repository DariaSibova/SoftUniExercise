function solve(city){
    // let keys = Object.keys(city);
    // for(let key of keys){
    //     console.log(key, '->',city[key]);
    // }
    // for (let entry of Object.entries(city)){
    //     // console.log(entry)
    //     console.log(entry[0], '->',entry[1]);
    // }
    for (let [key,value] of Object.entries(city)){
        console.log(key,'->',value)
    }
   
}

solve({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })