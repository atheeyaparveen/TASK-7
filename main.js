// Dog Years

// The  constant variable display my age

const myAge=25;

// create reassignable variable that holds early years of dog.
let earlyYears= 2;

earlyYears = earlyYears * 10.5;

//later years of a dog held in reassignable variable.
let laterYears = myAge-2;

//calculate later years in dog years
laterYears=laterYears*4;

console.log(` earlyYears: `+earlyYears+` laterYears: `+laterYears);
//takes our early dog years and later years and gives us total age in dog years.

const myAgeInDogYears = earlyYears + laterYears;
const myName="Atheeya Parveen";

// return my name in lower case
myName.toLowerCase();
console.log(myAge);

// logs our name,human years, and dog years.
console.log(`My name is ${myName}. I am HUMAN ${myAge} years old in human years which is DOG ${myAgeInDogYears} years old in dog years.`);
