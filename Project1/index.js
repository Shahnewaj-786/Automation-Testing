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