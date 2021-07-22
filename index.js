const fs = require("fs");
const inquirer = require("inquirer");
// don't forget to add a const variable here that requires file name we will write to

const myTeam = [];

var questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your manager's name. (Required)",     // manager name
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter your manager's name.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your manager's ID number (Required)",            // manager id
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must enter your manager's ID number.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your manager's email address (Required)",    // manager email
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter your manager's email address.")
                }
            }

        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your manager's office number. (Required)",     // manager office number
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter your manager's office number");
                }
            }
        }
    ])
        .then(managerInfo) = function () {
            let { nameinput, idInput, emailInput, officeNumberInput } = managerInfo;
            let manager = new Manager /// need to create Manager class first (in lib/Employee.js??)
        }
};

// questionsPrompt();
