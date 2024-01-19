function solve(input){
    for(let i = 0; i < input.length - 1;i++){
        let rowOne = input.reduce((acc,value) => {
            acc += value[i];
            return acc

        }, 0);
        let rowTwo = input.reduce((acc,value) => {
            acc += value[i + 1];
            return acc
        }, 0);
        let colOne = input[i].reduce((acc,value) => acc + value);
        let colTwo = input[i + 1].reduce((acc,value) => acc + value);
        if(rowOne !== rowTwo || colOne !== colTwo){
            return false;
        }
    }
    return true;
}