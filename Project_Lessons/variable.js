var x = "Hello World"; // when declear any variable try to avoid "var". "var" is not optimal for declear variable. it wont show any proper error for multiple declearation. Best practice is to use const or let

console.log (x);

let a = 12; // in node js no need to declear data type of variable. It will take the data type itself. 
const b = 13;
let c = "1";
let d = b+c; // add a string and a number


console.log (a+b);

console.log (d); // as we know output will be string

console.log (typeof (a));

console.log (typeof (a+b)); // for check data type of a variable use typeof()

console.log (typeof d);

let z = 2;
z = undefined; // When need to earase or delete any variable 
console.log(z);

let p = "new"
p = null; // When need to earase or delete any variable 
console.log(p);


let o = { // let a = {} this how an object is defined in js
    name: "Devid jack", // a: value, b: value --> this is way of define key or property for object
    age: 30,
    number: "+880111111"
}

console.log(o);




