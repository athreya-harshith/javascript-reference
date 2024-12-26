function fun(fn)
{
    console.log('hello ');
    fn();// if we are using () on the parameter it must be a function
}

fun(function statusFun()
{
    console.log(' too much of fun');
    console.trace();// try this without statusFun()
});
// here we have passed the function as parameter , and it cannot be accessed outside
// ie its impossible to call statusFun() in global scope as its restricted to scope of fun()
// function call

// for recursion named function expressions are required

// console.trace() output without statusFun()
/*
Trace // the below line doesnot show function name
    at /Users/athreya_harshith/backend/javascript/function_expressions/4_usecase_of_named_function_expr.js:10:13
    at fun (/Users/athreya_harshith/backend/javascript/function_expressions/4_usecase_of_named_function_expr.js:4:5)
*/

// console.trace() output with statusFun()

/*
Trace // the statusFun is printed 
    at statusFun (/Users/athreya_harshith/backend/javascript/function_expressions/4_usecase_of_named_function_expr.js:10:13)
    at fun (/Users/athreya_harshith/backend/javascript/function_expressions/4_usecase_of_named_function_expr.js:4:5)
*/