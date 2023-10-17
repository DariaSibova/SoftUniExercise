function printHeader(){
    console.log('~~~- {@} -~~~') ;
    console.log('~- Certificate -~');
    console.log(' ~~~- ~---~ -~~~')
}
function printName(nameArr){
    console.log(nameArr[0] + ' ' + nameArr[1])
}
function printGrade(grade){
console.log(grade[0] + ' ' + grade[1]);
}


printHeader()
printName(['John','Smith']);
printGrade(['Very good' ,'(5.25)'])
