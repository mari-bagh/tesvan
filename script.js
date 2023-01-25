// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//CHALLENGE #1

let temp = [17, 21, 23];
let temps2 = [12, 5, -5, 0, 4];
// let temps = temp.concat(temps2);

const printForecast = function (arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i]}C in ${i + 1} days ...`
    }
    console.log('...' + str)
    // return (`... ${arr[0]} in 1 days ... ${arr[1]} in 2 day...`)
}
console.log(printForecast(temp))
