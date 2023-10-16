function solve(numA,numB,name,age){
    // let result = numA + numB;
    // console.log(result);
    // let textForPrint = `${name} -> ${age + result}`;
    // console.log(textForPrint)

    let addTwoNumbers = function(a,b){
        console.log(a + b)
    }
    addTwoNumbers(numA,numB);
    let textForPrint =  `${name} -> ${age}`
    console.log(textForPrint)
}

solve(1,2,"Todor",34)