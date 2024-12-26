//HOF are the functions that takes another function as argument
//HOF are the functions that consume another function
var fun;
function f(x, fn) {
  console.log(x);
  console.log(fn);
  fun = fn;
  fn();
}

f(10, function exec() {
  console.log("hey i am an expression passed to HOF");
});

console.log(fun);
fun();

let arr = [-5, 1, 11, 10, 100, 1000, 11, 12, 13, 14, 3, 2, 9];

arr.sort(); //our expectation will be that it would sort the elements in increasing order
console.log(arr);
//it does the sorting lexicographically as default (default implementation)
//lexicographicall means in dictionary order

let b = [-5, 1, 11, 10, 100, 1000, 11, 12, 13, 14, 3, 2, 9];
// to change the default implementation we pass the comparator function
// since sort() is HOF (internal HOF)
b.sort(function (a, b) {
  return a - b;
});

console.log(b);

// console.log("Just testing ");
// f(10); note that the function without even passing the required number of arguments will gets invoked
// the f() takes 2 arguments but even after passing one it will work
