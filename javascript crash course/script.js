// Loops
// DRY = Don't Repeat Yourself
let counter = 1
while (counter <= 5) {
    console.log(counter)
    counter++;
 }
 console.log("while loop finished running")

//  for (let i = 1; i <= 20; i++) {
//     if(i % 5 === 0) {
//         console.log(`${i} - ASAP Frontend`)
//     } else if (i % 2 === 0) {
//         console.log(`${i} - Frontend`)
//     }else {
//         console.log(`${i} - ASAP`)
//     }
//  }
let str = "ASAP frontend";
 for ( let i = 0; i <= str.length; i++) {
    console.log(str[i])
 }