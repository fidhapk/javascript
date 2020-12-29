//arrow functions are nameless functios and no need of function keyword
//assign function to a variable

//add function as arrow function

let add=(num1,num2)=>num1+num2;

console.log(add(50,40))

//subtraction

let sub=(num1,num2)=>num1-num2;
console.log(sub(80,10))

//factorial

let factorial=(num)=>{
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(6))
