let score = "33";

console.log(typeof score);
console.log(typeof(score)); //typeof can also be used as a method

let valueInNumber = Number(score); // this will convert the varibale in to number type for sure
console.log(typeof valueInNumber);

// but what if score was a mix of number an characters then
score = "33abc"
valueInNumber = Number(score); // this will convert the varibale in to number type for sure
console.log(typeof valueInNumber); // this says it's a number
console.log(valueInNumber); // this says NaN -> not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ankit" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);