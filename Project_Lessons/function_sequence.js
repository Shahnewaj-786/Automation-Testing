// In JS function called by in those sequence in which they are called not in whice they are decleared. 

/**
 * 
 * Like if we declear a(){
 * display ("a")
 * }
 * 
 * 
 * and b(){
 * display ("b")
 * }
 * 
 * 
 * and call as b() then (a)
 * 
 * 
 * it will print b first not a. 
 */

function myDisplay(myText){ 
    console.log(myText); //To display 
}


function firstDeclear(){
    myDisplay ("Display First Function"); //Declear in order 1 
}


function secondDeclear(){
    myDisplay ("Display Second Function"); //Declear in order 2
}


secondDeclear(); //Call in order 1
firstDeclear(); //Call in order 2