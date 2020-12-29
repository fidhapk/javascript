var num=2;
var sum=0;
var i=1
var temp=num;
while(i<=temp)
{
    sum=sum+num;
    num=(num*10)+temp;
    i++;
}
console.log(sum);
