// command Add = you should add the given value to the end of the sequence
//command Remove = you should remove the first occurence 
// command replace = you should replace the first occu.
//command collapse 

function numbers(str,Add,"1") {
    if(str){
        let nums = str.split(' ');//.map(Number) 
    }
 
    let result = Array;
    
    if (commands === 'Add'){
        nums.push(1);
        result = nums
        console.log(result)
    }

    // for (let i = 0; i < commands.length; i++) {
    //   let currentCommand = commands[i].split(' ');
    //   let action = currentCommand[0];
  
    //   if (action === 'Add') {
    //     let numToAdd = Number(currentCommand[1]);
    //     nums.push(numToAdd);
    //   } else if (action === 'Remove') {
    //     let numToRemove = Number(currentCommand[1]);
    //     nums = nums.filter(num => num !== numToRemove);
    //   } else if (action === 'Replace') {
    //     let numToReplace = Number(currentCommand[1]);
    //     let replacementNum = Number(currentCommand[2]);
    //     let index = nums.indexOf(numToReplace);
    //     if (index !== -1) {
    //       nums[index] = replacementNum;
    //     }
    //   } else if (action === 'Collapse') {
    //     let threshold = Number(currentCommand[1]);
    //     nums = nums.filter(num => num >= threshold);
    //   }
    // }
    // console.log(nums.join(' '));
  }


numbers("1 4 5 19",
"Add 1",
"Remove 4",
"Finish")