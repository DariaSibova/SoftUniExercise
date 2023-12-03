function solve(input){
    // parse input 
    // store hero data

    let command = {
        Heal,
        Recharge,
        CastSpell,
        TakeDamage
    };

    let n = Number(input.shift());
    let party = {};

    for (let i = 0; i < n; i++){
        let heroData = input.shift();
        // let [name,hp,mp] = heroData.split(' ');
        createHero(heroData);

        // let hero = {
        //     hp: Number(hp),
        //     mp: Number(mp)
        // };
        
        // party[name] = hero;
    }

    // for each line until 'End'
    // - check command and execute 

    while (input[0] != 'End'){
        let line = input.shift();
        let tokens = line.split(' - ');
        let commandName = tokens[0];
        let name = tokens[1];
        let hero = party[name];
        
        let commands = command[commandName];
        commands(name, hero, tokens);

        // switch(command){
        //     case 'Heal':
        //         let hpToRestore = Number(tokens[2]);
        //         if(hpToRestore + hero.hp > 100){
        //             hpToRestore = 100 - hero.hp;
        //         }
        //         hero.hp += hpToRestore;
        //         console.log(`${name} healted for ${hpToRestore} HP!`);
        //         break;
        //     case 'Recharge':
        //         let mpToRestore = Number(tokens[2]);
        //         if(mpToRestore + hero.mp > 200){
        //             mpToRestore = 200 - hero.mp;
        //         }
        //         hero.mp += mpToRestore;
        //         console.log(`${name} recharged for ${mpToRestore} MP!`);
        //         break;
        //     case 'CastSpell':
        //         let mpCost = Number(tokens[2]);
        //         let spellName = tokens[3];
        //         if(hero.mp >= mpCost){
        //             hero.mp -= mpCost;
        //             console.log(`${name} has successfully cast ${spellName} and now has ${mpCost} MP!`)

        //         } else {
        //             console.log(`${name} does not have enough Mp to cast ${spellName}`)
        //         }
        //         break;
        //     case 'TakeDamage':
        //         let damage = Number(tokens[2]);
        //         let attacker = tokens[3];
        //         hero.hp -= damage;
        //         if(hero.hp > 0){
        //             console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${} HP left!`);
            
        //         } else {
        //             console.log(`${name} has been killed by ${attacker}!`);
        //             delete party[name];

        //         }
        //         break;
        // }
    }

    // print result
    for (let name in party){
        let hero = party[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }

    function createHero(heroData){
        let [name,hp,mp] = heroData.split(' ');

        let hero = {
            hp:Number(hp),
            mp:Number(mp)
        };
        party[name] = hero;
    }

    function Heal(name,hero,tokens){
        let hpToRestore = Number(tokens[2]);
        if(hpToRestore + hero.hp > 100){
            hpToRestore = 100 - hero.hp;
        }
        hero.hp += hpToRestore;
        console.log(`${name} healed for ${hpToRestore} HP!`)
    }

    function Recharge(name,hero,tokens){
        let mpToRestore = Number(tokens[2]);
        if(mpToRestore + hero.mp > 200){
            mpToRestore = 200 - hero.mp;
        }
        hero.mp += mpToRestore;
        console.log(`${name} recharged for ${mpToRestore} MP!`);

    }

    function CastSpell (name,hero,tokens){
        let mpCost = Number(tokens[2]);
        let spellName = tokens[3];
        if(hero.mp >= mpCost){
            hero.mp -= mpCost;
            console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`)
        } else {
            console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }

    }

    function TakeDamage(name,hero,tokens){
        let damage = Number(tokens[2]);
        let attacker = tokens[3];
        hero.hp -= damage;
        if(hero.hp > 0){
            console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`);
        } else {
            console.log(`${name} has been killed by ${attacker}!`);
            delete party[name];
        }
    }


    // # Heal
    // check how much health can be restored
    //add hp to hero starts 
    // print success massage 

    // # CastSpell
    // check if hero has enough mana 
    // -if yes , cast spell , subtract mana and print success message
    // - otherwise , print error message

    // # TakeDamage
    // substract damage from hero health 
    // check if hero is still alive 
    // - if yes, print damage message 
    // - if no , print death message and remove hero from party 
}


solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ])