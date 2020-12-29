var pattern="ABABBC";

//find first recursive charecter;
obj={}
for(let char of pattern){

    if(char in obj){
        console.log("first recursive charecter is: "+char)
        break;
    }
    else{
        obj[char]=1;
    }
}

