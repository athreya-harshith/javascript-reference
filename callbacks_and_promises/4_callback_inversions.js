/*
doTask() is a HOF,
we are using it to pass a callback function 

the control of callback is transferred to doTask() , which might be handled by some one else
which can cause some problem if some improper handling is done 

hence it is called as Inversion of cotroll
it is resolved by promises
*/

function doTask(fn,x)
{
    // some code of doTask

    fn(x*x);
    fn(x);
}

doTask(function (num)
{
    console.log('the number is ',num);
},9);