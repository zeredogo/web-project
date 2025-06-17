/* Function
//  function Declaration
 function greetUser(name, time) {
    console.log(`Good ${time}, ${name}`)
 }

//  call the function
 greetUser("Paul", "Morning");
 greetUser("Dogo", "evening")*/

 function sum(num1, num2) {
   return num1 + num2
 }

 console.log(sum(2, 7))

 /* Create a function that converts $USD into AUD
  $AUD to $USD formula:
  AUD = USD x 1.5
 */
// Regular function
  function convertUsdToAud(dollars) {
    return dollars * 1.5
  }
   console.log(convertUsdToAud(1000))
   console.log(convertUsdToAud(500))
   console.log(convertUsdToAud(200))

   // Arrow function

  const convertUsdToAud2 = (dollars) => {
     return dollars * 1.5
  }

  console.log(convertUsdToAud2(350))

  // Arrays
  let array = [20, 15, 10, 30, 5]
  // first element of an array
  console.log(array[0])
  // Last element of an array
console.log(array[array.length - 1])

// array methods
// Mutating method
array.push(13)

// Non-mutating method

/*let filteredArray = array.filter((element) => {
  console.log(element);
  if (element <= 15) {
     return true
    }
})*/

//Another way of doing this if the para-meter is just one you don't need ()
// and you just return the element directly with the if statement
/* 
let filteredArray = array.filter(element => {
     return element <= 15
    })
*/
    // there is another way but only if you are returning a single line of code 
    let filteredArray = array.filter(element => element <= 15)
console.log(filteredArray)

//Exercise
// Filter out all the people who are not 18+ years old
/*
let people = [18, 20, 16, 15, 21];
let abults = people.filter(element => element >= 18);

console.log(abults)

let people2 = [16, 17, 14, 15, 19];
let abults2 = people2.filter(element => element >= 18);

console.log(abults2)

let people3 = [20, 22, 26, 16, 20];
let abults3 = people3.filter(element => element >= 18);

console.log(abults3) */

 //let people = [18, 20, 16, 15, 21];

// for (let i = 0; i <= people.length; i++){
//   console.log(people[i])
// }


/*
for ( let i = 0; i < people.length; i++) {
  if(people >= 18) {
   
  }
} */

  // Filter out without using .filter method

  let people = [18, 20, 16, 15, 21];

  // Create a new empty array (called Adults)

  let adults = [];

  for ( let i = 0; i < people.length; i++) {
  //Check if age is 18+
  //TRUE - Add element to the new array
  if (people[i] >= 18){
    adults.push(people[i])
  }
}

console.log(adults)