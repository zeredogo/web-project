// Object
let users = [
  {
    email: "example@gmail.com",
    password: "text1234",
    name: "Paul Dogo",
    discord: "examplediscord",
    subscription: "VIP+",
    lessonCompleted: [1, 2, 3,],
  },
  {
    email: "dogo@gmail.com",
    password: "text1234",
    name: "Dogo",
    discord: "dogodiscord",
    subscription: "VIP+",
    lessonCompleted: [1, 2, 3, 4],
  },
];

console.log(users);

// let signUps = [{}];

// const signUp = (email, password, name, discord, subscription, lessonCompleted) => {
//    return  signUps[0].push(email, password, name, discord, subscription, lessonCompleted)
// }

// console.log(signUp("paul@email.com", "text", "Sunday", "pauldiscord","VIP+", 5))

function signUp(user) {
  users.push(user);
};

signUp({
  email: "sunday@gmail.com",
  password: "text1236664",
  name: "Sunday",
  discord: "sundaydiscord",
  subscription: "VIP+",
  lessonCompleted: [1, 2, 3, 4, 5, 6],
});

console.log(users);


// DOM
// 1st method 

console.log(document.querySelector('#heading'))
// change content / html
document.querySelector('h2').innerHTML += "Krypto Zone"

// 2nd method
console.log(document.getElementById('heading'))


// change CSS
document.querySelector('h1').style.backgroundColor = "red"

function changeButtonToGreen() {
    document.querySelector('button').style.backgroundColor = "green"
}

function toggleSidebar() {
    console.log("Toggle sidebar")
}