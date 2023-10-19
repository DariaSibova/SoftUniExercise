function solve(input){
//parse input , removing elements
// - split frist two elements and create pirate ship and man-o-war status arrays
// - parse max health from third element

// for each remaining element:
// - parse current element
// -- split element by ' '
// -- first token is command, other tokens (if any) are numbers
// - depending on element type, perform action

// # Fire:
// - validate index
// - damage man-o-war section
// # Defend - damage pirate ship sections
// # Repair - increase section hp (without exceeding max)
// # Status - print heavily damages(hp < 20% max) sections
// # Retire - stop processing

// print result
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