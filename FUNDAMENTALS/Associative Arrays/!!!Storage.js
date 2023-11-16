function solve(arr){
    let map = new map();

    for(let string of arr){
        let tokens = string.split(' ');
        let products = tokens[0];
        let quantity = Number(tokens[1]);

        if(!map.has(products)){
            map.set(products,+quantity);

        } else {
            let  currQuantity = map.get(products);
            let newQuantity = currQuantity +=  quantity;
            map.set(products,newQuantity)
        }
        for(let  kvp of map){
            console.log(`${kvp[0]} '->' ${kvp[1]}`);
        }
    
        
    }
  

}




solve(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])

solve(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])