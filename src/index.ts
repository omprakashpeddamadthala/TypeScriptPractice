console.log("Hello World!!!")

let myName : string ="Om Prakash";
var myAge : number = 24;
const API_VERSION : string = "v2"; 

console.log(myName, myAge, API_VERSION);

// Data Types
// Number
let myFavNumber :number = 900;
let myDecimalNumber : number =10.989;

console.log(myFavNumber, myDecimalNumber.toFixed(1));

//String

let myNewName :string ="Om Prakash";
let myAnotherName :string =`Prakash - ${myNewName}`
console.log("string literal "+myNewName, myAnotherName);

//Boolean
let isAuthenticated :boolean = true;
if (isAuthenticated){
    console.log("User is authenticated");
}

//Any Type
let myFavMoveie :any ="Mission Impossible";
myFavMoveie = 9089;
console.log(myFavMoveie);

//void
const myFunction =(): void =>{
    console.log("Hello World");                 
}

myFunction();

//null undifined unknown never
let myNullValue : null = null;
let myUndefinedValue : undefined = undefined;

let myUnknownValue : unknown = 890.9
if(typeof myUnknownValue === "number"){
    console.log(myUnknownValue.toFixed(1));
}

const  handleExpection =() : never =>{
    throw Error("Something went wrong");
}
//handleExpection();

//array
let cites1 :string[] = ["New York","Hyderbad","Bangalore"]
console.log(cites1);

let cites2 = ["New York","Hyderbad","Bangalore",909]
console.log(cites2);

//Enum 
enum myRoles{
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

let selectedRole : myRoles = myRoles.Admin;
console.log(selectedRole);

//class example

class ATMMachine{

    name:string;
    accNumber:number
    balance:number

    constructor(name:string,accNumber:number,balance:number){
        this.name = name;
        this.accNumber = accNumber;
        this.balance = balance;
    }

    checkBalance(){
        return this.balance;
    }

}

let atm = new ATMMachine("SBI",123456789,1000);
console.log(atm);
let atm2 = new ATMMachine("ICICI",987654321,2000);
console.log(atm2);