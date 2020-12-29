var num=123;

var reverse=0;
var reminder;
while(num!=0)
{
    reminder=num%10;
    reverse=reverse*10+reminder;
    num=num/10;

}
console.log("reverse is "+reverse);