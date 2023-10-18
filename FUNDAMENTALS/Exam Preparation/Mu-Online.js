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
    let room = rooms[0].split(' ');
    let type = room[0];
    let num = Number(room[1]);

    
    if (type == "potion") {
        console.log('room with potion');
        // let newHP = health + num <= 100 ? num : 100 - health;
        // health += newHP;
        // console.log(`You healed for ${newHP} hp.`);
        // console.log(`Current health: ${health} hp.`);
      } else if (type == "chest") {
        console.log('room with chest');
        // coins += num;
        // console.log(`You found ${num} coins.`);
      } else {
        console.log('room with monster');
        // health -= num;
}
   

    // if successful,print result


    let bestRoom = 1;
  
  
  
    for (let room of rooms) {
      let tokens = room.split(' ');
      console.log(tokens);
  
      let command = tokens[0];
      let num = Number(tokens[1]);
  
      
  
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${bestRoom}`);
          break;
        }
      }
      bestRoom++;
    }
  
    if (health > 0) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
  
  solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
  // solve(["cat 10|potion 30|orc 10|chest10|snake 25|chest 110"])