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
