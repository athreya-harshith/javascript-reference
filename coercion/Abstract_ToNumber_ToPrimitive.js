let obj = {
    x:10
};
console.log(obj);//{ x: 10 }
console.log(obj.toString());// the default value associated with toString() is [object Object]
console.log(obj.valueOf());// the default implementation of object returns the object itself
// the above line is same as console.log(obj); { x: 10 }

let obj1 = 
{
    toString()
    {
        // default implementation returns [object Object]
    },
    valueOf()
    {
        // default implementation returns the same object
        // return 0;
    }
}

let obj2={}
console.log(10-obj2);
// no matter what ever the key value pairs present in the object , the toString() and valueOf() method will be invoked
let obj3={x:7,y:8,valueOf(){ return 88;}};
console.log(100-obj3);
let obj4={x:7,y:8,toString(){return '20';}}
console.log(100-obj4);
// the below implementation will result in TypeError
// let obj5 = {toString(){ return {};}};
// console.log(25-obj5);
console.log(1+obj);//1[object Object] because if anyone of the operand is string , it converts the other also to string and returns the concatenation
