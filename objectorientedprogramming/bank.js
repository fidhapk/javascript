//createaccount()
//deposite()
//withdraw()
//balEnq()

class bank{

    static bankname=()=>{
        console.log("sbkbank")
    }

    createAccount=(acno,name,minimum_balance)=>{
    this.acno=acno;
    this.name=name;
    this.minimum_balance=minimum_balance;
    }
    deposit=(amount)=>{
        this.minimum_balance+=amount
        console.log("your account "+this.acno+" has been credited with amount "+amount+" available balance is "+this.minimum_balance)
    }

    withdrawal=(amount)=>{
        if(amount>this.minimum_balance){
            console.log("insufficient balance in your account")
        }
        else{
            this.minimum_balance-=amount;
        }
    }

    balEnq=()=>{
        console.log("your available balance is "+this.minimum_balance)
    }
}

var obj=new bank()
obj.createAccount(100,"fida",5000)
obj.deposit(10000)
obj.withdrawal(50000)

//static methods are called using class name ,not object .
bank.bankname()

