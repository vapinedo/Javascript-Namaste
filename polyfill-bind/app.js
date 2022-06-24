let person = {
    firstname: "Karim",
    lastname: "Benzema"
};

const printPerson = function() {
    console.log(`${this.firstname} ${this.lastname}`);
};

const printMyPerson = printPerson.bind(person);
printMyPerson();

// Now write our own bind method
Function.prototype.myBind() {
    
}

const printMyPerson2 = printPerson.myBind(person);
printMyPerson2();

