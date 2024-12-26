const f = function fun(){
    console.log('How much fun???');
}
f();
// fun(); this causes error because the fun() is tightly bounded to f
// hence we speak the scope of f instead of fun() 