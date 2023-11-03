var x = "Hello World";

console.log(x);

let a = 12;
const b = 13;
let c = "1";
let d = b + c;


console.log(a + b);

console.log(d);

console.log(typeof (a));

console.log(typeof (a + b));
console.log(typeof d);

let z = 2;
z = undefined;
console.log(z);

let p = "new"
p = null;
console.log(p);

console.log("\n");


let o = {
    name: "Devid jack",
    age: 30,
    number: "+880111111"
}

console.log(o);


console.log("\n");



const number = [10, 15, 20, 25]
console.log(number);


for (i = 0; i < number.length; i++) {
    console.log("by for loop: " + number[i]);
}


console.log("\n");


for (const item of number) {
    console.log(item);
}


console.log("\n");



const item2 = []
item2.push(10)
item2.push(107)
item2.push(150)
item2.push(170)
item2.push(510)
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

console.log("\n");



const numb = []
numb.push(10);//index  0
numb.push(40);//index 1
numb.push(30);//index 2
numb.push(100);//index 3
numb.push(500); //index 4

i = 0;
while (i < numb.length) {
    console.log(numb[i]);
    i++;
}

console.log("\n");






function my_add(a,b){
    const result = a+b;
    console.log("Result is: "+result)
}

my_add(2,5)

my_add("2",5)

my_add(2,"5")




function my_add_number(a,b){
    const result = Number(a)+Number(b);
    console.log("Result is: "+result)
}


my_add_number(2,5)

my_add_number("2",5)

my_add_number(2,"5")