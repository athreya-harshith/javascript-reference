function* fetchNextElement() {
  const x = 10;
  yield 11;
  // console.log(yield 55);
  console.log("entering after a yield");
  const y = x + (yield 30);
  console.log("value of y is ", y);
}

const iter = fetchNextElement();

console.log("first ", iter.next());
console.log("second ", iter.next(22));
console.log("third ", iter.next(10));

// console.log(NaN+25);
