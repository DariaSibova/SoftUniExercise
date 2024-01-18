function solve (numAsString, ...op){
    let operationEnum = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num) ,
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        filter: (num) => num * 0.80,

    }
    let num = Number(numAsString);
    op.forEach(el => {
        num = operationEnum[el](num);
        console.log(num);
    })
}