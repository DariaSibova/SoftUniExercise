function solve(input) {
    //initialize state
    let hp = 100;
    let loot = 0;

    //parse input into rooms
    let rooms = input.split('|');

    // for every room
    // - parse current room
    // - check keyword and perform action
    // -- if potion , helt (to max 100) and print message
    // -- if chest, collect loot and print message
    // -- otherwise,fight monster

for(let i = 0; i < rooms.length;i++){
    let room = rooms[i].split(' ');
    let type = room[0];
    let num = Number(room[1]);

    
    if (type == "potion") {
        if(hp + num > 100){
          num = 100 - hp;
        }
        hp += num;
        console.log(`You healed for ${num} hp.`)
        console.log(`Current health: ${hp} hp.`);
      } else if (type == "chest") {
       loot += num;
        console.log(`You found ${num} bitcoins.`);
      } else {
        hp -= num;
        if(hp <= 0){
          console.log(`You died! Killed by ${type}.`);
          console.log(`Best room: ${i + 1}`);
          return;
        }else {
          console.log(`You slayed ${type}.`);
        }
}
}
    // if successful,print result
      console.log("You've made it!");
      console.log(`Bitcoins: ${loot}`);
      console.log(`Health: ${hp}`);
   
  }
  
  solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
  // solve(["cat 10|potion 30|orc 10|chest10|snake 25|chest 110"])