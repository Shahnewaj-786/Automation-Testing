function s1(){
    console.log("S1: Hello NODEJS Function");
}

s1(); //For print need to call function name again like s1(). 



//We can also make a variable a function, this is arrow function 
function s2(){
    return "S2: Make a variable into a function";
}

const a = s2;
console.log(a());


function s3(){
    return "S3: Hello world";
}
console.log(s3()); //For print 


//Use function as variable 

function s4(){
    return "S4: Use Function as variable";
}

const x = s4(); //Store the function in variable x
console.log(x); //print x --> this will print s4 function 


let e = "2";
let f = 2;
let g = (e+f);
console.log(g) //In JS string has more priority over int. 



//Create an add function 

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


