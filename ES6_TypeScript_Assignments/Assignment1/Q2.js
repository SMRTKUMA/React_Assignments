//Checking Variable Scope  

function myHalfName(name){
    if(name=="Chandler"|| name=="Chand") {
    let message = "Hii, Chandler!!!";
    console.log(message); // Output: Hii, Chandler!!!
     }
 console.log(message); // Output: Uncaught ReferenceError: message is not defined
 }

 myHalfName("Chand");