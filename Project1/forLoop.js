//For Loop in JS.

const number = [] 
number.push (10)
number.push (40)
number.push (30)
number.push (100)
number.push (500)


for(i=0; i<number.length; i++){
    console.log("by for loop: "+number[i]);
}


console.log("\n");
//Foreach loop in JS.  
//use let if we need to change variabl in future, if not use const

for (const item of number){
    console.log(item); 
}