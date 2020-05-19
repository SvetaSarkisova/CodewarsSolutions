
//https://www.codewars.com/kata/562926c855ca9fdc4800005b


function numberToPower(number, power){
    let res = 1
    let n = 0;
    do {
        res = res * number
        n++
    } while ( n < power);
    if (power === 0 ) return 1;
    return res;
}