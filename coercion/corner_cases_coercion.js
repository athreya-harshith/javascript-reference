//ToString
console.log("" + 0); //0
console.log("" + -0); //0
console.log([]); // []
console.log("" + []); // removes the [] from the output

console.log({}); // {}
console.log("" + {}); //[object Object]

console.log("" + [1, 2, 3]); //1,2,3

console.log("" + [undefined, null]); // ,
console.log("" + [1, 2, null, 3]); //1,2,,3

//ToNumber
console.log(0 - "010"); // -10
console.log(0 - "O10"); //NaN
// octal numbers are represented by leading 0
console.log(0 - 0o10); //-8
console.log(0 - "0xa"); //-10
// 0x is used to represent hexadecimal number

// some extra corner cases
console.log([] - 1); //-1
console.log(["2"] - 2); // 0
