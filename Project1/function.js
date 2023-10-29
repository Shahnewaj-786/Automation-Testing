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







