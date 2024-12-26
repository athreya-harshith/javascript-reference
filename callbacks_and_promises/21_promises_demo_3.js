function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {}
}
console.log("start of file");
setTimeout(function timer1() {
  console.log("timer 1 done");
}, 0);

blocking_for_loop();

let p = Promise.resolve("harshiths promise1");
p.then(function processPromise(value) {
  console.log("who's promise, ?", value);
  blocking_for_loop();
});
let y = Promise.resolve("harshiths promise2");
y.then(function processPromise(value) {
  console.log("who's promise, ?", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});
let z = Promise.resolve("harshiths promise3");
z.then(function processPromise(value) {
  console.log("who's promise, ?", value);
});
setTimeout(function timer2() {
  console.log("timer 2 done");
}, 0);

console.log("end of file");
