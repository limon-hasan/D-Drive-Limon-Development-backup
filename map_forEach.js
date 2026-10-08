// map
let numbers  = [2,3,5,6];

let mp = numbers.map(function(element) {
    console.log(element)
})

let num = [5,6,7,7]

// let val = num.map(function(elem) {
//     // console.log(elem * 2);
//     return elem * 2;
// })
// let val = num.map((elem) => {
//     // console.log(elem * 2);
//     return elem * 2;
// })

// let val = num.map((elem) => elem * 2);
// let v = console.log(val);

// let val = num.map((elem, index, num) => {
//     console.log(elem, index, num);
// });



// forEach -> 
let num1 = num.forEach((value, indx, num) => {
    console.log(value, indx, num);
});


// let prices = [100,200,300,400,500,600];
// let expensiveProducts = prices.filter((elem, indx, prices)=> {
//     console.log(elem, indx, prices);
//     // if(elem >= 500) return true;
//     // else return false;
//     return elem >= 500;
// })
// console.log(expensiveProducts);  // return an array



// find() -- return only first value baed on the codition
let prices = [100,200,300,400,699,700, 500,600];
let expensiveProducts = prices.find((elem, indx, prices)=> elem >= 500)
console.log(expensiveProducts);  // return an array





let phones = [
    {
        model : "iphone 15",
        price : 72000
    },
    {
        model : "iphone 16",
        price : 86000
    },
    {
        model : "iphone 17",
        price : 92000
    },
    {
        model : "s25 ultra",
        price : 72000
    },
    {
        model : "Tecno",
        price : 15000
    },
    {
        model : "Samsung A07",
        price : 17000
    }
]

// let expensivePhones = phones.filter((phone)=> {
//     console.log(phone);
//     // console.log(phone.price);
//     return phone.price >= 50000
// })
// let expensivePhones = phones.filter((phone => phone.price >= 50000));
// let chepeastPhones = phones.filter((phone)=> {
//     return phone.price === 92000;
// })
// console.log(expensivePhones);
// console.log(chepeastPhones);

// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     contact: {
//       email: "alice@example.com",
//       phone: "555-0123"
//     },
//     skills: ["JavaScript", "React"]
//   },
//   {
//     id: 2,
//     name: "Bob",
//     contact: {
//       email: "bob@example.com",
//       phone: "555-4567"
//     },
//     skills: ["Figma", "CSS"]
//   }
// ];

// console.log(employees[1].contact['phone']);
// console.log(employees[1].skills[0]);

// reduce -->
let numm = [10,20,30,40]
let sum = numm.reduce((accuumulator, val, indx, num)=> {
    console.log(accuumulator, val, indx, num);
    return accuumulator + val;
},0)
console.log(sum);

