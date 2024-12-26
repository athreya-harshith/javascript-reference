console.log(null == undefined); //true
console.log(12 == "12");
console.log(false == "0");
console.log("false" == false);
// this converts the 'false' (string ) to ToNumber
/*
'false' -> ToNumber -> NaN
false -> ToNumber -> 0
NaN == 0 -> false
*/
console.log("false" - 0);
console.log("consider false == null", false == null);
console.log("consider null == true", null == true);
console.log("consider null == 0", null == 0);
console.log("consider null == 1", null == 1);
let obj = {
  x: 10,
  valueOf() {
    return 100;
  },
};
console.log(99 == obj); // reuturn false
console.log(100 == obj); // return true
/*
 x ->number
 y-> object ->ToPrimitive(y)->valueOf()->returns 100
 x == 100
*/
