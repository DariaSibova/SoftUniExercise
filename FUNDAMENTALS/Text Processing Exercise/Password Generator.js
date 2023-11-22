function solve(arr){
    let [str1,str2,replacementStr] = arr;
    let concatedStr = str1 + str2 ;

    // let vowels = ['a','e','i','o','u'];

    let idx = 0;

    for (let char of concatedStr){
        // if(vowels.includes(char)){
        if(/[aeoui]/.includes(char)){

            concatedStr = concatedStr.replace(char,replacementStr[idx].toUpperCase());
            idx++;

            if(idx == replacementStr.length){
                idx = 0;
            }
        }
    }
    let password = concatedStr.split('').reverse().join('');
    console.log(`Your generated password is ${password}`)
}

solve([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])

    solve([

        'easymoneyeazylife',
        
        'atleasttencharacters',
        
        'absolute'
        
        ])

        solve([

            'areyousureaboutthisone',
            
            'notquitebutitrustyou',
            
            'disturbed'
            
            ])
