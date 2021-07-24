const Employee = require("./Employee");



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);   /// super here will access original name input by user

        this.github = github;


    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
};


module.exports = Engineer;




















