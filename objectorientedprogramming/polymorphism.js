//many forms
//method overloading
//method overriding
 class maths{
     add=()=>{
         console.log("no arg method")
     }
     add=(no1)=>{
         console.log("single arg method")
     }
     add=(no1,no2)=>{
         console.log("2 arg method")
     }
 }

 //in javascript unlike other languages only recently implemented method will work
  var math=new maths()
  math.add(20)