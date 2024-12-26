function* fetchNextElement() {
  console.log("i am inside generator funciton ");
  yield 1;
  yield 2;
  console.log("somewhere in middle");
  yield 3;
  //   return 10;
  yield 4;
  //   return 8;
}
let res = fetchNextElement();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
