// ToNumber('20'); this is an abstract operation its not meant to be done by developers
let a = "1" + 1;
console.log(typeof a); //string
console.log(2 - 9); //-7
console.log(2 - null); //since null is made as object , it might be NaN
console.log(2 - undefined); //2 ?? chek it !!!!!!!!!!!!!!!!
console.log("9" - "2"); //7
console.log(10 - true); //9
// chech from here
console.log(1 - "0xa"); //-9
console.log(1 - "123ab"); //nan
console.log("athreya" / 2); //Nan
