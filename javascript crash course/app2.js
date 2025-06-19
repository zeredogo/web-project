// Object
let users = [
    {
    email: "example@gmail.com",
    password: "text1234",
    name: "Paul Dogo",
    discord: "examplediscord",
    subscription: "VIP+"
},
{
    email: "dogo@gmail.com",
    password: "text1234",
    name: "Dogo",
    discord: "dogodiscord",
    subscription: "VIP+",
    lessonCompleted: [1, 2, 3, 4]
},
]

console.log(users)

let signUps =[{}]; 

//const signUp = (email, password, name, discord, subscription, lessonCompleted) => {
 //   return  signUps[0].push(email, password, name, discord, subscription, lessonCompleted)
//}

//console.log(signUp("paul@email.com", "text", "Sunday", "pauldiscord","VIP+", 5))


function signUp(user) {
   users.push(user)
}
signUp(
  { 
   email: "paul@email.com", 
   password: "text", 
   name: "Sunday", 
   discord: "pauldiscord",
   subscription:"VIP+", 
   lessonCompleted: [1, 2]
})
console.log(users)