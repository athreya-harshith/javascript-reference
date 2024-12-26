"use strict";
{
    function fun()// this unlike the previous belongs to the block scope only 
    {
        console.log('hello');
    }
    console.log(fun);// no error 
}
// console.log(fun);// causes error in parsing stage itself