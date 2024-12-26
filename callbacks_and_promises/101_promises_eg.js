// run this code only in chrome browser
function createPromise() {
  return new Promise(function executor(resolve, reject) {
    let x = setTimeout(function () {
      return 2;
    }, 3000);
    console.log(x);
    if (x % 2 == 0) resolve("successfull");
    else reject("rejected");
  });
}
let y = createPromise();
