for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0) {
        console.log("ASAP frontend")
    } else if (i % 2 === 0 ) {
        console.log("frontend")
    } else {
        console.log("ASAP")
    }
}

let str = "ASAP frontend";
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

const auDollar = dollar => dollar * 1.5

console.log(auDollar(1000))
console.log(auDollar(500))
console.log(auDollar(200))
