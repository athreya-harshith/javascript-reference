console.log("start of file");

setTimeout(function timer1() {
  console.log("timer 1 done");
}, 0);

for (let i = 0; i < 10000000000; i++) {}

let p = Promise.resolve("harshiths promise"); // is called as already resolved promise
p.then(function processPromise(value) {
  console.log("who's promise, ?", value);
});

setTimeout(function timer2() {
  console.log("timer 2 done");
}, 0);

console.log("end of file");
