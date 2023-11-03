const people = { // we can add every type to data type on an object, an object can be in an object also. 
    name: "ShSB",
    age: 30,
    salary: "50k",
    working_days: ["jan", "feb", "march"],
    address: {
        home: "Dhaka", 
        billing: "Gopalgonj"
    }
};

console.log(people); // print object


//we can change object value any time just use object name . and variable name and reprint this for new value. 
people.name = "Bappi"; 
people.age -= 5;
people.job = "QA"; // we can also add property in object
people.salary = 100000;


console.log(people);