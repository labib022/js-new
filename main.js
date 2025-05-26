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

// console.log(person['profession'][0]);

// function square(number){
//     return number * number
// }
    

// const result = square(10)
// console.log(result);

//  function calculateDiscount(price, percentage){
//     const total = price- (price*percentage/100);
//     return total
//  }

//  const myDiscount = calculateDiscount(200, 10)
//  console.log(myDiscount);

// /



// function calculateDiscount(price, percentage){
//     const total = price - (price*percentage/100);
//     return total
// }
// const myDiscount = calculateDiscount(1000, 15)
// console.log(myDiscount);



// const users = ["Lamin", "Lewra", "pedri", "Inigo", "Fermin", "Gavi", "kunde"];
// for(let i = 0; i< users.length; i++){
//     console.log(`hi, ${users[i]}`)
//     console.log("-----------")
    
// }


// const users = ["Lamin", "Lewra", "pedri", "Inigo", "Fermin", "Gavi", "kunde"];
// users.forEach((user)=>{
//     console.log(`hi, ${user}!`)
//     console.log('--------')
// })
        //  today//


const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.map(number => number / 10);
console.log(result);

function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;

}
const gen = generateNumbers()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* idGenaretor(){
    let id = 1;
    while (true){
        yield id++
    }
}

const gen = idGenaretor()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


function countDown(n){
    if (n<= 0) return;
     
    console.log(n)
    countDown(n-50)
}

countDown(1000);

function factorial(n){
    if(n===0) return 1;
    return n * factorial(n-1)
}
console.log(factorial(7));


function factorial(n){
  if(n===0) return 1;
  return n * factorial(n - 1)
}
console.log(factorial(6));
