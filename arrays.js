let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 


// let newNumbers = numbersArray.find((element) => element > 20)
let newNumbers = numbersArray.filter(number => number > 20);

console.log("Opgave 1", newNumbers)

catsArray.push("Sniffles")
console.log("Opgave 2", catsArray)

// console.log("Opgave 3a", dogsArray.includes(("Trixie")) )
// console.log("Opgave 3b", dogsArray.includes(("Baxter")))
    
let dog = dogsArray.includes(("Trixie"));  
let dogs = dogsArray.includes(("Baxter"))


console.log("Opgave 3a", dog)
console.log("Opgave 3b", dogs)

// ikke særlig "flexable"
// console.log("Opgave 4a",catsArray.includes("Bagheera") ? "Bagheera" : undefined )
// console.log("Opgave 4b", catsArray.includes("Salem") ? "Salem" : undefined)
    
    const found = catsArray.find((element) => element == "Bagheera")
    console.log(found)
    const found2 = catsArray.find((element) => element == "Salem")
    console.log(found2)
    // korter og bedre :)
    

// console.log("Opgave 5",numbersArray.map(numb => numb * 3));
let numbers = numbersArray.map(numb => numb * 3)

console.log("Opgave 5", numbers )

namedogsall = ""
dognospace = dogsArray.forEach((dognames) =>{
    namedogsall += dognames
})

console.log("Opgave 6", namedogsall);


// fruitsArray.forEach((fruits, index) =>{
//     console.log("Opgave 7a & b", fruits, index)
// })

// const mango = fruitsArray.find((element) => element == "Mango")

// console.log("Opgave 7a", mango);

console.log("Opgave 7a", fruitsArray.indexOf("Mango"));
console.log("Opgave 7b", fruitsArray.indexOf("Blåbær"));


// til at fjerne via tal men det gør det ikke nemt at fjerne det fra et for eksempel input felt
// popping = dogsArray.splice(3, 1)

// console.log("Opgave 8", dogsArray);

const doggies = dogsArray.indexOf("Polly");
// const dogaway = dogsArray.splice(doggies, 1);
// console.log("Opgave 8", dogsArray);

console.log(doggies);

console.log("Opgave 8", dogsArray.toSpliced(doggies, 1));

