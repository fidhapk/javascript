var tweets=[
    "sachin,tweet1",
    "sachin,tweet2",
    "kohli,tweet1",
    "kohli,tweet2",
    "kohli,tweet3",
    "sewag,tweet1"
]
//find name tweeted most;

var obj={}
for(let tweet of tweets)
{
    let name=tweet.split(",")[0];
    if(name in obj){
        obj[name]+=1
    }
    else{
        obj[name]=1
    }


    

}
console.log(obj)


var sorted=[]
//stored in value:key pair;
//[[1,sewag],[2,sachin],[3,kohli]]
    for(let k in obj){
        sorted.push([obj[k],k])
    }
sorted.sort((one,two)=>two[0]-one[0])
console.log(sorted[0])