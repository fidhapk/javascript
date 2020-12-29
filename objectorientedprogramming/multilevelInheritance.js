//multilevel inheritance
class parent{
    m1=()=>{
        console.log("inside parent")
    }
}
class child extends parent{
    m2=()=>{
        console.log("inside child")
    }

}
class grandchild extends child{
    m3=()=>{
        console.log("inside grandchild")
    }
}
var gc=new grandchild()
gc.m3();
gc.m2();
gc.m1();

var ch=new child()
//ch.m3() will show error
ch.m2()
ch.m1()

var pr=new parent()
//pr.m3() error
//pr.m2() error
pr.m1()