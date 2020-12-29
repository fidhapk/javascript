//map()
//filter()
//reduce()
//sort()


var array=[10,1,5,3,4,6]
//squares


//calculate squares 
//we have to use map
var squ=array.map(num=>num**2)
//arrow function is used
//squ will be an array in which result is stored
console.log(squ)

//finding cube
var cube=array.map(num=>num**3)
console.log(cube)


//find even numbers from this array
//we have to use filter for this purpose
var evens=array.filter(num=>num%2==0)
console.log(evens)



var names=["sachin","sehwag","kohli","yuvraj","kaif","dravid"]
//print names in uppercase
//hint:use map
var name=names.map(na=>na.toUpperCase())
console.log(name)

//print all names starting with s
//hint:use filter
var sname=names.filter(na=>na[0]=='s')
console.log(sname)

//print name start with k in uppercase
//forEach method is used here: internal iteration
names.filter(na=>na[0]=='k').
    map(na=>na.toUpperCase()).
        forEach(na =>console.log(na))//internal iteration
    



var num=[5,75,12,20,3]   
num.forEach(nm=>console.log(nm))     





