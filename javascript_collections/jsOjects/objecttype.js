var expense=[20000,25000,45000,30000,50000,15000,45000,12000,32000,41000]


//expense of march
console.log(expense[2])

//expense of total of feb and jan
var total=expense[0]+expense[1];
console.log(total)


//use key value pair to make searching faster.

var students={
    rol:15,
    name:"fida",
    course:"btech",
    total:200
}
console.log(students["name"])
console.log(students.name)

//duplicate keys are not allowed
//duplicate values are allowed.

//object iteration;
for(let key in students){
    console.log(key)
}


//checking for a specific key is there
console.log("course" in students)
console.log("gender" in students)

//adding a key value pair;
students["gender"]="female"
console.log(students)

//adding 50 more to total;
students["total"]+=50;
console.log(students)

