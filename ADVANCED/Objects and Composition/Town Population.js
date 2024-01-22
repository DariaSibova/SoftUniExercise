function solve(input){
    //create result collection
    const result = {};

    //for every line of input
    for(let line of input){
        // - parse line
        const tokens = line.split(' <->');
        const name = tokens[0];
        const pop = Number(tokens[1]);
        // - if city exists,add population,otherwise,create new record
        if(result.hasOwnProperty(name)){
            result[name] += pop;

        } else {
            result[name] = pop;
        }
    }
    //print result
    for(let name in result){
        console.log(name, ':',result[name]);
    }
}

solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])
solve(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])