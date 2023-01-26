// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
const a = [45,5,1,6]
const temps = temperatures.concat(a)
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        let  currTemp = temps[i];
        if(typeof currTemp !== 'number') continue;
        if(currTemp > max) max = currTemp;
        if(currTemp < min) min = currTemp;

    }
    console.log(max, min);
    return max - min;
}
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++){
        let  currTemp = temps[i];
        if(typeof currTemp !== 'number') continue;
        if(currTemp > max) max = currTemp;
        if(currTemp < min) min = currTemp;

    }
    console.log(max, min);
    return max - min;
}
const amplitudeNew = calcTempAmplitudeNew(temperatures, [2,6,78,45,1]);
console.log(amplitudeNew);

const measureKelvin = function () {
    const measurement = {
        type : 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    };
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measureKelvin())

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

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
const x = [[6, 5, 9 , 77],['assa']]
function arr (...arrays){
    return arrays.flat()
}
console.log(arr(...x));

//sort array by object property
const x = [{a:3, b:54},{a:32, b:1}]
function arr (arg){
    return arg.sort((x,y) => x.b-y.b) //if - ascending, if + descending
}
console.log(arr(x))
//   [{
//   a: 32,
//   b: 1
// }, {
//   a: 3,
//   b: 54
// }]

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
let a = [1,58,88,76,46]
let b = [3,5,88,46,7]

function myFunction(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
}
console.log(myFunction(a,b)) //[1, 3, 5, 7, 46, 58, 76, 88]
