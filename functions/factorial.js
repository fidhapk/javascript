var num=6;
var r;
function factorial(num)
{
    let result=1;
    for(let i=1;i<=num;i++)
    {
        result=result*i;
    }
    //console.log(result)
    return result 
}
r=factorial(num);
console.log(r)