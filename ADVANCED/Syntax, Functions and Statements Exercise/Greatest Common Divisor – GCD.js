function solve(a,b){
    let GCD = a % b;

    while(GCD != 0){
        a = b;
        b = GCD;
        GCD = a % b;
    }

    console.log(b);
}

solve(15, 5);
solve(2154, 458);