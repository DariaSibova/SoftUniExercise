const iterableObj = {
    value: 0,
    [Symbol.iterator]:{
        
         next(){
            return{
                value: ++iterableObj.value,
                done: iterableObj.value >= 5
            };
         
        }
}
}
