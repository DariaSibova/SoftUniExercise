function employees(arr){
    for(let employeeName of arr){
// for(let name of arr){
        let employee = {name: employeeName, personalNum: employeeName.length};
        // let employee = {name , personalNum: name.langth};
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}


employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])