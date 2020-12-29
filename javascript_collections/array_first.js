//we can store different type of elements
//no size limit
//cant specify the type of elements

var arr=[1,false,"diya",10.6]

console.log(arr[0])
console.log(arr[2])

//array iteration
console.log("Array Iteration")
 for(let data of arr)
 {
     console.log(data)
 }

 //method for adding an object to array;
 arr.push("fida")
 console.log(arr)

 //method for deleting an element
 //last added element will be deleted first
 arr.pop()
 console.log(arr)

 //update a position 
 arr[2]=50;
 console.log(arr)

 //