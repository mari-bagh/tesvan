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