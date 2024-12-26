let cnt =0;
let y =setInterval(function ()
{
    cnt++;
    console.log(cnt);
    if(cnt>15)
        clearInterval(y);
},1500);

console.log(typeof(y));