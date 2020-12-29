class parent{
    constructor(){
        console.log("parent constructor")
    }
    
}
class child extends parent{
    constructor(){
        //super will refer to parent
        //super keyword used to call parent constructor from child
        super()
        console.log("child comstructor")
    }
   
}

var ch=new child()
