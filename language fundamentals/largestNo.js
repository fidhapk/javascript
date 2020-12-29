//larget no
var num1=50;
var num2=60;
var num3=70;
if((num1>num2)&(num1>num3))
{
    console.log(num1+" is largest");
}
else if((num2>num1)&(num2>num3))
{
    console.log(num2+" is largest");
}
else if((num3>num1)&(num3>num2)){
    console.log(num3+" is largest");
}

//second largest

if((num1>num2)&(num1>num3))
{
    if(num2>num3)
    {
        console.log(num2+" is second largest");
    }
    else{
        console.log(num3+" is second largest");
    }
}
else if((num2>num1)&(num2>num3))
{
    if(num1>num3)
    {
        console.log(num1+" is second largest");
    }
    else{
        console.log(num3+" is second largest");
    }
}
else if((num3>num1)&(num3>num2)){
    if(num1>num2)
    {
        console.log(num1+" is second largest");
    }
    else{
        console.log(num2+" is second largest");
    }
}