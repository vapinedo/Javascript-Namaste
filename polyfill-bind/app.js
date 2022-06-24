let person = {
    firstname: "Karim",
    lastname: "Benzema"
};

const printPerson = function(hometown, state) {
    console.log(`${this.firstname} ${this.lastname}, ${hometown}, ${state}`);
};

const printMyPerson = printPerson.bind(person, "Barranquilla");
printMyPerson();


// Now write our own bind method
Function.prototype.customBind = function(...args) {
    let targetFunction = this;
    let params = args.slice(1);
    return function () {
        targetFunction.apply(args[0], params);
    }
}

const printMyPerson2 = printPerson.customBind(person, "Barranquilla");
printMyPerson2();