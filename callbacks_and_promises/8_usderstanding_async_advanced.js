function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 10000000000; i++) {
    //some task
  }
  console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("starting timer0");
  setTimeout(function exec() {
    console.log("completed the timer0");
    for (let i = 0; i < 10000000000; i++) {
      //
    }
  }, 5000);
}
function timeConsumingByRuntimeFeature1() {
  console.log("starting timer1");
  setTimeout(function exec() {
    console.log("completed the timer1");
  }, 0);
}
function timeConsumingByRuntimeFeature2() {
  console.log("starting timer2");
  setTimeout(function exec() {
    console.log("completed the timer2");
  }, 200);
}
console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("bye");
// the runtime features are handled by runtime
// the time interval in setTimeout is processed in runtime and after that
// time the corresponding callback is placed in the event loop
