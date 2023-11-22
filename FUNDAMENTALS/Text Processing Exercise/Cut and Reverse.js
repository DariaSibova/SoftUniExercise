function solve(str){
    let middleIdx = str.length / 2;

    let leftHalf = str.slice(0,middleIdx).split('').reverse().join('');
    let rightHalf = str.slice(middleIdx).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);

}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
// solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')