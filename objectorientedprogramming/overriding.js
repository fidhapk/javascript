//method overriding
class parent{
    phone=()=>{
        console.log("i have nokia 5303")
    }
}
class child extends parent{
    phone=()=>{
        console.log("i have iphone 12")
    }

}
var ch=new child()
ch.phone()
