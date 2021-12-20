let animals =['Dog','Cat','Rat','Horse'];  
// let a,b,c;  
[, , ,a,] = animals;  
console.log(a);



// Object Deep Matching
let organization = {
    name: "MicroSoft",
    address:{
        street: "Park Avenu",
        city: "NY",
        pincode: 5965
    }
}

let {address: {pincode: pincode}} = organization;

console.log("Pincode:", pincode);