const responseExtractor = (obj) => {
    const {
        user : {name : userName, age : AGE = 11}
    } = obj;
    // console.log(user);
    // console.log(obj);
    // console.log(userName, AGE);
    return obj;
    // return {
    //     userName, AGE
    // };
}
console.log(responseExtractor({user : {name : "limon", age : 22}}));
console.log(responseExtractor({user : {name : "Shah"}}));
console.log(responseExtractor({user : {name : "HAsan"}}));



// value swap using destructuring
let a = 45, b = 60;
[b, a] = [a, b];  // value swap using destructuring
console.log(a, b);


let nums = [70,23,45,67,89,87, 100,0];
let [val, val2, ...temp] = nums;
console.log(val, val2,  temp);


