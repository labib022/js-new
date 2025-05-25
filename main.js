// var biscuitJar = "Lexus";
// console.log(biscuitJar);

// const myName = document.querySelector('.panda');
// myName.innerHTML = "shawon";
// console.log(myName)

// const potatoPacket = "Lays";
// console.log(potatoPacket);

// const a = [1,2,3,4];
// console.log(a[0]);

// biscuitJar = ["lexus", "orio", "orange", "true", "false",
//     "null", ( 1, 2, 3)
// ];
// console.log(biscuitJar )

// person = {
//     name: "Leo Messi" ,
//     country: " Argentina",
//     profession: "Footballer ",
//     greencard:  true,
//     age: 37,

//     surName: ["Leo", "Andress", "messi"],
//     father: {
//         name: "Horhe Messi",
//         age: 58,
//     }

// } 

console.log(person['profession'][0]);

function square(number){
    return number * number
}
    

const result = square(10)
console.log(result);

 function calculateDiscount(price, percentage){
    const total = price- (price*percentage/100);
    return total
 }

 const myDiscount = calculateDiscount(200, 10)
 console.log(myDiscount);

/



function calculateDiscount(price, percentage){
    const total = price - (price*percentage/100);
    return total
}
const myDiscount = calculateDiscount(1000, 15)
console.log(myDiscount);



const users = ["Lamin", "Lewra", "pedri", "Inigo", "Fermin", "Gavi", "kunde"];
for(let i = 0; i< users.length; i++){
    console.log(`hi, ${users[i]}`)
    console.log("-----------")
    
}


