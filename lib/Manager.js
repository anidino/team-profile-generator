const Employee = require("./Employee");



class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name);   /// super here will access original name input by user??

        this.officeNumber = officeNumber;


    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;
