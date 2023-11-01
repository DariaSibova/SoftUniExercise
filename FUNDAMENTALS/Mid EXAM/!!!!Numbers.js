// command Add = you should add the given value to the end of the sequence
//command Remove = you should remove the first occurence 
// command replace = you should replace the first occu.
//command collapse 

function numbers(str, commands,value) {
    if(str){
        let nums = str.split(' ');//.map(Number) 
    }
 
    let result = Array;
    
    if (commands === 'Add'){
        nums.push(value);
        result = nums.join()
    }

    for(let n of nums){
        if (commands === 'Remove'){
            if(n != value){
                    result.push(n)
            }

        }
    }

   
  }

numbers("1 4 5 19",
"Add 1",
"Remove 4",
"Finish")