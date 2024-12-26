let obj ={};// corresponding outputs
console.log(obj);// {}
console.log(typeof obj);// object
console.log(obj.toString());// [object Object]
console.log(typeof obj.toString());// string
console.log(obj.valueOf());// {}
console.log(typeof obj.valueOf());// object

let obj1={x:10};
console.log(obj1);//{ x: 10 }
console.log(obj1.valueOf());//{ x: 10 }

console.log(1-obj);//obj.valueOf()-> object , obj.toString() ->[object Object](its of type string)-> this whole thing id by default
//NaN OP of the above statement
console.log(10-obj1);//NaN because by default the value is object and string is[object Object]
let obj2={y:200,valueOf(){return 99}};
console.log(100 - obj2);//1 as we have explicitly defined the return in valueOf

let obj3={x:8 , toString(){return "88"}};
console.log(90-obj3);//2 as we have overrided the toString() method
// what if toString() returns an object
let obj4={a:20,toString(){return {}}};
// console.log(25-obj4); TypeError: Cannot convert object to primitive value

// THE BELOW STATEMENTS IS FOR THE ADDTION OPERATION +

console.log("1"+obj2);//199
//in addtion operation the + operation call ToPrimitive(obj) hence here default hint is number
// if any of the operand is string then it does the concatenation 
// else if both are numbers it does the addition whoes return type is string
console.log(1+obj2);//100
console.log("18"+obj);//18[object Object] here its simple because the 18 is already a string
console.log(18+obj);//18[object Object] here obj is checked for valueOf as it returns an object by default, it calls  toString() that returns the default string [object Object] the 18 is concatenated with that value
//the bleow statement is unary operator that converts the operand to number type
console.log(+"10");//10
console.log(+"12sfd");//NaN