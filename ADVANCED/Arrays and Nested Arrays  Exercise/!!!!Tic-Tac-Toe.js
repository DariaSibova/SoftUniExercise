function solve(data){
    let initDashboard = [
        [false,false,false],
        [false,false,false],
        [false,false,false]
    ]
    let isFirstPlayerPlay = true;
    for(let coordinates of data){
        let [x,y] = coordinates.split(" ");

        if(initDashboard[x][y]){ //false || X ||O
            console.log(`This place is already taken.Please choose another!`);
            continue;

        }
        let marker = isFirstPlayerPlay ? "X" : "O";

        initDashboard[x][y] = marker;
        if(checkWin(initDashboard,marker)){
            console.log(`Player ${marker} wins!`);
            return printDashboard(initDashboard)
        }

        if(!checkFreeSpace(initDashboard)){
            console.log("The game ended! Nobody wins :(");
            return
        }
    }
}