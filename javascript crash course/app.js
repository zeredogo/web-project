// Let keyword
let userEmail = "paul@gmail.com";
let name = "Paul";


// Const keyword

const points = 100;

// Currency Converter

// $AUD to $USD Formula:

//  AUD = USD x 1.5

let USD = 1200;
let AUD = USD * 1.5; 

console.log(AUD); 

// Comparison

let comparison = '4' === 4

console.log(comparison)

// Conditional 

let hasMembership = false;
let signedIn = true

if(hasMembership === true) {
    console.log("show user the video")
}else if (signedIn === true) {
    console.log('tell user to upgrade their account')
}
else {
    console.log('tell user to log in')
}

let age = 20;
let hasId = true;
if (age > 18 || hasId === true) {
    console.log(`You're ${age} years old, you may enter the club!`)
} else if (age === 18 && hasId === true) {
    console.log(`You just turned ${age}, welcome`)
}
else {
    console.log(`you're ${age} years old, get outta here`)
}