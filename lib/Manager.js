const Employee = require("./Employee");



class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);   /// super here will access original name input by user??

        this.officeNumber = officeNumber;


    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;
