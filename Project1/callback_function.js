function myDisplay(my_command){
    console.log(my_command);
}

function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback (sum);
}


myCalculator (25, 25, myDisplay);