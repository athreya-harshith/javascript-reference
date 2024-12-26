//  Example 1
// console.log("hello world");
// setTimeout(function ()
// {
//     console.log('hello');
// },0);
// console.log('end');

/* OUTPUT
hello world
end
hello
*/

// Example 2
// console.log("hello world");
// setTimeout(function ()
// {
//     console.log('hello');
// },0);
// for(let i=0;i<10000000000;i++)
// {
//     // some code
// }
// console.log('end');

/* OUTPUT

hello world
end
hello

*/

//Example 3

// console.log("hello world");

// for(let i =0;i<3;i++)
// {
//     setTimeout(function exec()
//     {
//         console.log('Timer done');
//     },10);
// }
// for(let i=0;i<10000000000;i++)
// {
//     // some code
// }
// console.log('end');

/* outoput
hello world
end
Timer done
Timer done
Timer done
*/

//Example 4

console.log("hello world");
setTimeout(function exec()
    {
        console.log('Timer done');
        setTimeout(function exec()
        {
            console.log('woah another timer');
        },10);
    },0);
for(let i=0;i<10000000000;i++)
{
    // some code
}
console.log('end');