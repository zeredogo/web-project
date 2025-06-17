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

// Ternary Operator

let isRaining = true;

isRaining ? console.log('it is raining') : console.log('it not raining')

let loggedIn = true;
let hasMembershipCard = true;

let str = loggedIn && hasMembershipCard ? 'show video' : "don't show video";

console.log(str)
// Loops
// DRY = Don't Repeat Yourself
let counter = 1
while (counter <= 5) {
    console.log(counter)
    counter++;
 }
 console.log("while loop finished running")

 /* write a for-loop that loops through 1 to 20.
if the number is odd, print 'ASAP'
if the number is even, print "frontend"
if the number is divisible by 5, print "ASAP frontend"
*/
  for (let i = 1; i <= 20; i++) {
     if(i % 5 === 0) {
         console.log(`${i} - ASAP Frontend`)
     } else if (i % 2 === 0) {
         console.log(`${i} - Frontend`)
     }else {
         console.log(`${i} - ASAP`)
     }
  }
/* Print out all the character from the string:
"ASAP frontend" */
let str1 = "ASAP frontend";
 for ( let i = 0; i <= str.length; i++) {
    console.log(str1[i])
 }