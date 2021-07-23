class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return "Manager";
    }


}

module.exports = Manager;



// class Manager extends Employee {
//     constructor(officeNumber) {
//         super(name, id, email);   /// super here will access original name input by user??

//         this.officeNumber = officeNumber.num;


//     }

//     getRole() {
//         return "Manager";
//     }
// };

module.exports = Manager;
