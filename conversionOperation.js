let score = null //number converted to "string" due to double cots

console.log(typeof score); //score variable on "string"
console.log(typeof(score)); //score variable on "string"

let converToNumber = Number(score); //"score" variable converted to "Number"
console.log(typeof(converToNumber)); //outputType in "Number because we converted string to Number".

console.log(converToNumber); //displays "NaN" because 

// "33" => 33 (converts to Number)
// "33abc" => NaN (doesn't convert to Number)
// true => 1; false => 0 (true converts to 1 number & false converts to 0)

let isLoggedIn = 1 //is in number

let booleanIsLoggedIn = Boolean(isLoggedIn) //converted "isLoggedIn" variable value to boolean
console.log(booleanIsLoggedIn); // display true (because 1 if true in boolean)

// others examples in boolean convertion
// 1 => true
// 0 => false
// "" -> empty string => false
// "shubham" => true