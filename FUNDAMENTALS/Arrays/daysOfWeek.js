function solve(index){
    // if(index < 1 || index > 7){
    //     console.log('Invalid day!');
    // }else{  
        let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    // console.log(days[index - 1]);
    let result = days[index - 1];
    if(result != undefined){
        console.log(result)
    }else {
        console.log(`Invalid day!`);
    }
}

// let days = [ 'Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// if(index >= 1 && index <=7){
//     //todo
// }else {
//     //todo
// }
  
// }
solve(3);