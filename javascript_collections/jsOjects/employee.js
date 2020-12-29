var employee={
    eid:100,
    name:"fida",
    designation:"developer",
    salary:25000

}

//check for gender key is there;
console.log("gender" in employee)

//add gender:female key value pair;
employee["gender"]="female"

//add 5000 more rs to salary;
employee["salary"]+=5000;

//print all key:value pairs;
for(let k in employee){
    console.log(k,employee[k])
}

//print employee name only;
console.log(employee["name"])