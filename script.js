//function declarations- can be used before declaration
 function myAge(birthYear) {
    return 2023- birthYear
}
console.log(myAge(1997));


//function expressions- a function value stored in a variable
const newFunc = function (birthYear) {
    return 2023 - birthYear
};
console.log(newFunc(1997));

//arrow functions- one line without return, has no this keyword
const calcAge = birthYear => 2023 - birthYear;
console.log(calcAge(1997));;

//arrow func with more than one parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return ` ${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1997, 'Jany'));


const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. `
    return juice;
}
console.log(fruitProcessor(4,5));

// console.log(window.a);

// challenge #1
const calcAverage =  (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

let avgDolphins = calcAverage(85,54,41);
let avgKoalas = calcAverage(23,34,27);

const checkWinner =  function (avgDolphins, avgKoalas)  {
    if(avgDolphins >= avgKoalas *2){
        console.log(`Dolphins team is win (${avgDolphins} vs ${avgKoalas})!`);
    } else if(avgKoalas >= avgDolphins *2){
        console.log(`Koalas team is win! (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log('No team wins.')
    }
}

checkWinner(avgDolphins, avgKoalas);

//arrays
const friends = ['Michael', 'John', 'Peter'];
// const years = new Array(1991, 1998, 2000);
console.log(friends[friends.length-1]);
friends[0] = 'Jay';
console.log(friends);

const me = ['Marie', 1999, friends]
console.log(me);

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1990, 1991, 1992, 1994];
 // console.log(calcAge(years));
const ages = [calcAge(years[0]), calcAge(years[2])];
console.log(ages);

//array adding methods
//from the end of array
friends.push('Alla');
// const newLength = friends.push('Alla'); //shows the length
console.log(friends);
// console.log(newLength);
// friends.unshift('fd'); //from the begining of array

//removing elements from array
const a = friends.pop(); //pop from the end of array , shows the popped el.
console.log(a);

friends.shift(); //first el
console.log(friends);

console.log(friends.indexOf('Peter')); //if it not exist return -1
console.log(friends.includes('Peter')); //true
console.log(friends.includes(10)); //false


//Challenge #2
const calcTip = function (billValue) {
    return (billValue >= 50 && billValue <= 300) ? billValue * 15 / 100 : billValue * 20 / 100;
}
const bills = [ 125, 555, 44 ];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const total = [bills[0]+ tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills,tips,total);

//Challenge #3
const jonas = {
    firstName: 'Jonas',
    lastName: 'Brown',
    birthDay : 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven' ],
    calcAge: function (){
         this.age = 2023-this.birthDay;
         return this.age
    },
    driverLicense: true,
    getSummary: function ()
    {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.driverLicense ? 'a' : 'no'} driver's license.`
    }}
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

//Challenge #4
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi)
if (mark.calcBMI()>john.calcBMI()) {
    console.log(`${mark.fullName.slice(0, 4)}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}!`)
};

const jonasArray = [
    'Jonas',
    'Smith',
    2037-1990,
    'teacher',
    ['Michael','Steve', 'Peter']
]

const types = [];
for (let i = 0; i <  jonasArray.length ; i++){
    console.log(jonasArray[i], typeof jonasArray[i]);

    types[i] = typeof jonasArray[i];
}
console.log(types);

for (let i = 0; i <  jonasArray.length ; i++){
   if(typeof jonasArray[i] !== 'string') continue
console.log(jonasArray[i], typeof jonasArray[i])
}


for (let i = 0; i <  jonasArray.length ; i++){
    if(typeof jonasArray[i] === 'number') break
    console.log(jonasArray[i], typeof jonasArray[i])
}

const years = [1991, 2007, 1996, 2010];
const ages = [];

for(i = 0; i < years.length; i++){
    ages.push(2038-years[i])
}
console.log(ages);

let a = [2, 3, 4, 8, 9, 11];
let b = [];

for (i = 0; i < a.length; i++ ){
    if(a[i] % 2 === 0){
    b.push(a[i])
    }
}
console.log(b)

for(let i = jonasArray.length-1; i >= 0; i--)
{
    console.log(jonasArray[i])
}

let dice = Math.trunc(Math.random() * 10) + 1
console.log(dice)

//CHALlENG $5
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (billValue) {
    return (billValue >= 50 && billValue <= 300) ? billValue * 15 / 100 : billValue * 20 / 100;
}
for (let i = 0; i < bills.length; i++) {
     const tip = calcTip(bills[i]);
     tips.push(tip)
     totals.push(bills[i] + tip)
    console.log(bills, tips, totals)
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++ )  {
      sum += arr[i]
  }
    return sum / arr.length
}
console.log(calcAverage([2,3,7]))
console.log(calcAverage(totals))
