const fs = require("fs");

const inquirer = require("inquirer");
// don't forget to add a const variable here that requires file name we will write to
const generatePage = require("./src/page-template");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
// const Employee = require("./lib/Employee");


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
        .then(managerInfo => {


            let manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            myTeam.push(manager);
            // console.log(myTeam);
            console.log(myTeam);

            // nextQuestions();

        })


};
function nextQuestions() {
    return inquirer.prompt([
        {
            name: "role",
            type: "list",
            message: "Please select the role of the employee you're adding.",
            choices: ["Intern", "Engineer"]





        },


        {
            /// use inquirer boolean method "when" To make sure this is only asked if user selects engineer? same with intern's "school"


            type: "input",
            name: "github",
            message: "Please enter the engineer's Github username (Required)",
            when: (data) => data.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's Github username")
                }
            }


        },

        {
            type: "input",
            name: "name",
            message: "Please enter the name of this employee (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "id",
            message: "Please enter the ID of the employee (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your employee's email address (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter your employee's email address.")
                }
            }
        },

        {


            type: "input",
            name: "school",
            message: "Please enter this intern's school (Required)",
            when: (answers) => answers.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("You must enter the intern's school.");
                }
            }
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Would you like to continue adding team members? (Required)",
            default: false,

            validate: addmoreConfirm => {
                if (addmoreConfirm === true) {
                    return true;
                } else {
                    console.log("Alright! Your team is looking great!");
                }
            }
        }
    ])
        .then(employeeResponse => {
            const { role, name, id, email, school, github, addMore } = employeeResponse;
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, github);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, school);
            }

            myTeam.push(newEmployee);

            if (addMore) {
                return nextQuestions(myTeam);
            } else {
                return myTeam;
            }
        });
};

const printPage = function (page) {
    fs.writeFile("./dist/index.html", page, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team has been successfully created! Check dist/index.html to see!");
        }
    });
};



questionsPrompt()
    .then(nextQuestions)
    .then(myTeam => {
        return generatePage(myTeam);
    })
    .then((page) => {
        printPage(page);

    })
    .catch(err => {
        console.log(err);
    });




    //             let { role, github, name, id, email, school, addMore } = newEmployeeInfo;
    //             if (newEmployeeInfo.role === "Intern") {
    //                 let intern = new Intern(name, id, email, school);
    //                 console.log(intern);
    //                 myTeam.push(intern);
    //             } else if (newEmployeeInfo.role === "Engineer") {
    //                 let engineer = new Engineer(name, id, email, github);
    //                 console.log(engineer);
    //                 myTeam.push(engineer);
    //             }

    //             console.log(myTeam);
    //             return myTeam;

    //         })


    // }






