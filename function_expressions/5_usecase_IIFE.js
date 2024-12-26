// IIFE can avoid naming collisions
function x() {
  console.log("hello");
}
// function x(y)// the above x() gets over rided by x(y)
// {
//     console.log('hi',y);
// }
// x();
// x('harshith');
//o/p
// hi undefined
// hi harshith

// hence IIFE is useful

(function x(y) {
  console.log("hi", y);
})("harshith");
x();

function fun() {
  return 1;
}
function gun() {
  return 2;
}

let i = 7;

// if(i%2 == 0)
// {
//     var res=fun();
// }
// else
// {
//     var res = gun();
// }
// console.log(res);

// the same thing can be coded as IIFE

var res = (function iffe(i) {
  if (i % 2 == 0) return fun();
  else return gun();
})(i);
console.log(res);
// iife returns what is getting returned inside the function
