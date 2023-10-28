var x = "Hello World"; 

console.log (x);

let a = 12; 
const b = 13;
let c = "1";
let d = b+c; 


console.log (a+b);

console.log (d); 

console.log (typeof (a));

console.log (typeof (a+b)); 
console.log (typeof d);

let z = 2;
z = undefined; 
console.log(z);

let p = "new"
p = null; 
console.log(p);


let o = { 
    name: "Devid jack", 
    age: 30,
    number: "+880111111"
}

console.log(o);


const item = [10,15,20,25] 
console.log(item);

const item2 = [] 
item2.push (10)
item2.push (107)
item2.push (150)
item2.push (170)
item2.push (510)
console.log(item2);


const people = { 
    name: "ShSB",
    age: 30,
    salary: "50k",
    working_days: ["jan", "feb", "march"],
    address: {
        home: "Dhaka", 
        billing: "Gopalgonj"
    }
};

console.log(people); 


people.name = "Bappi"; 
people.age -= 5;
people.job = "QA"; 
people.salary = 100000;


console.log(people);