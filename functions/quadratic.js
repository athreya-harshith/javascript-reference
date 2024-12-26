function solve(a,b,c)
{
    let determinant = Math.sqrt(b*b - 4*a*c);
    let r1=(-b + determinant)/(2*a);
    let r2 = (-b - determinant)/(2*a);
    console.log(r1,r2);
}
solve(2,5,);