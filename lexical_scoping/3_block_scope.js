var y = 25;
{
    let x = 40;
    console.log('inside the block');
    console.log(x);
    console.log(y);
    // let x = 35; redeclaration is not allowed
}
console.log('outside the block');
// console.log(x);//x is not defined
// causes error because let and const belong to block scope