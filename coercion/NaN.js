console.log(Number('124'));
console.log(Number('athreya'));
console.log(Number('0xa'));

// isNaN to check the value is NaN or not

let x = NaN;
console.log(x != x);
console.log(isNaN(x))

let y ='atherya'
console.log(isNaN(y));// this gives true
/*
    The Above is happening because, isNaN does coercion 
*/
// To avoid coercion do Number.isNaN(argument)

console.log(Number.isNaN(y),(typeof(x)));//false
console.log(typeof "atheya")
console.log(typeof true);

// implementation of Number.isNaN

if( typeof(x) == 'number' && x !== x)
{
    console.log("the x is pure NaN")
}