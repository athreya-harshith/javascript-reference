// console.log(x); the TDZ exists for const
const x = 10;
const y = { x: 10 };
console.log(y.x);
y.x = 25; //this is not re-assigning its updating the property
console.log(y.x);
// y={} this is called re-assignment
x.val = 20; // this is boxing, momentarily it treat x as object
console.log(x); //10
console.log(x.val); //gives undefined
console.log((x.val = 20)); //20
// const z; it cant remain uninitialized
let z = 25;
console.log(z);
z.x = 20;
console.log(z);
