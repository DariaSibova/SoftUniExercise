function solve(input){
//parse input , removing elements
// - split frist two elements and create pirate ship and man-o-war status arrays
// - parse max health from third element
let pirate = input.shift().split('>').map(Number);
let warship = input.shift().split('>').map(Number);
let maxHp = Number(input.shift());
let critical = maxHp * 0.2;


// for each remaining element:
// - parse current element
// -- split element by ' '
// -- first token is command, other tokens (if any) are numbers
// - depending on element type, perform action

// # Fire:
// - validate index
// - damage man-o-war section
// - if section is broken,print message and stop execution

// # Defend:
// - validate index
// - damage pirate ship sections
// - if any section is broken,print message and stop execution

// # Repair:
// - validate index
// - increase section hp (without exceeding max)

// # Status - print heavily damages(hp < 20% max) sections

// # Retire - stop processing
for(let current of input){
   let tokens = current.split('');
   let command = tokens.shift();
   

   if(command == 'Retire'){
      break;
   } else if(command == 'Fire'){
      fire(tokens);
   }else if (command == 'Defend'){
      defend(tokens)
   } else if(command == 'Repair'){
      repair(tokens);
   } else if (command == 'Status'){
      status();
   }

   if(warship.filter(section => section <= 0).length > 0){
      console.log('You won! The enemy ship has sunken.');
      return;
   }
   if(pirate.filter(section => section <= 0).length > 0){
console.log('You lost! The pirate ship has sunken.')
return;
   }
}
let pirateStatus = 0;
let warshipStatus = 0;


for(let section of pirate ){
   pirateStatus += section;
}
for (let section of warship){
   warshipStatus += section;
}
console.log(`Pirate ship status: ${pirateStatus}`);
console.log(`Warship status: ${warshipStatus}`);

function isValid(ship,index){
   return index >= 0 && index < ship.length;
}
function fire(tokens){
   let index = Number(tokens[0]);
   let damage = Number(tokens[1]);
   

   if (isValid(warship,index)){
      warship[index] -= damage;
   }
}
function defend(tokens){
   let start = Number(tokens[0]);
   let end = Number(tokens[1]);
   let damage = Number(tokens[2]);

   if(isValid(pirate,start) && isValid(pirate,end)){
      for (let i = start;i <= end;i++){
         pirate[i] -= damage;
      }
   }

}
function repair(tokens){
  let index = Number(tokens[0]);
  let hp = Number(tokens[1]);

   if(isValid(pirate,index)){
      pirate[index] += hp;
      if(pirate[index] > maxHp){
         pirate[index] = maxHp;
      }
   }
}
// print result
// - sum each ship's section hp
function status(){
   let damaged = pirate.filter(section => section < critical);
   console.log(`${damaged.length} sections need repair.`)
}

}


solve(["12>13>11>20>66", 
"12>22>33>44>55>32>18", "70",
 "Fire 2 11", "Fire 8 100",
  "Defend 3 6 11", 
  "Defend 0 3 5", 
  "Repair 1 33",
   "Status", 
   "Retire"])


//    solve(["2>3>4>5>2",
//    "6>7>8>9>10>11","20",
//    "Status",
//    "Fire 2 3",
//    "Defend 0 4 11",
//    "Repair 3 18",
//    "Retire"])