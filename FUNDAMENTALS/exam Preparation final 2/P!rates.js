function solve (arr){
    let targets = {};
    let command = arr.shift();

    while (command != 'Sail'){
        let [city , population , gold] = command.shift('||');

        if(city in targets){
            targets[city].population += population;
            targets[city].gold += gold;


        }
        command = arr.shift();

    }

}

solve((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]))