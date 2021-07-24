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

            nextQuestions();

        })


};
function nextQuestions() {
    inquirer.prompt([
        {
            name: "role",
            type: "checkbox",
            message: "Please select the role of the employee you're adding.",
            choices: ["Intern", "Engineer"]





        },
        {
            name: "github",
            type: "input",
            message: "Please enter github of this Engineer (Required)",
            when: (answers) => answers.role[0] == "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must enter the employee's Github username")
                }
            }
        },
        // {
        //     type: "checkbox",
        //     name: "role",
        //     message: "Please select the role of the employee you are adding",
        //     choices: ["Intern", "Engineer"]
        // },

        {
            /// use inquirer boolean method "when"?? To make sure this is only asked if user selects engineer? same with intern's "school"


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
            when: (answers) => answers.role[0] === "Intern",
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
            /// how to do if/else statement that will loop user back through menu? 
            validate: addmoreConfirm => {
                if (addmoreConfirm === true) {
                    return true;
                } else {
                    console.log("Alright! Your team is looking great!");
                }
            }
        }
    ])
        .then(newEmployeeInfo => {
            // let employee = new Employee(newEmployeeInfo.name, newEmployeeInfo.id, newEmployeeInfo.email, newEmployeeInfo.githubInput);
            // myTeam.push(employee);

            // console.log(myTeam);

            // let intern = new Intern(newEmployeeInfo.role[0], newEmployeeInfo.name, newEmployeeInfo.id, newEmployeeInfo.email, newEmployeeInfo.school);




            if (newEmployeeInfo.role[0] === "Intern") {
                let intern = new Intern(newEmployeeInfo.name, newEmployeeInfo.id, newEmployeeInfo.email, newEmployeeInfo.school);
                console.log(intern);
            } else if (newEmployeeInfo.role[0] === "Engineer") {
                let engineer = new Engineer(newEmployeeInfo.name, newEmployeeInfo.id, newEmployeeInfo.email, newEmployeeInfo.github);
                console.log(engineer);
            }
            myTeam.push(intern);
            myTeam.push(engineer);
            console.log(myTeam);

            // if (addMore) {
            //     return nextQuestions();
            // } else {
            //     return myTeam;
            // }





            // nextQuestions();

        })

}


// questionsPrompt();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, error => {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your team has been been assembled!! Check out dist/index.html to see the results!");
        }
    })
};

function init() {
    questionsPrompt()
        .then(userAnswers => {
            let samplePage = generatePage(userAnswers);
            console.log(samplePage);
            writeToFile("./dist/index.html", samplePage);
        })
}


init();


/// add function to present user "menu" of options to add either intern or engineer to the team 
// these question prompts need to be wrapped in above mentioned function 
// return inquirer.prompt([

// const printPage = function (pageHTML) {
//     fs.writeFile("./dist/index.html", pageHTML, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Your page is being generated! Check out dist/index.html to see your team!");
//         }
//     });
// };









// const writeToPage = data => {
//     fs.writeFile("./dist/index.html", data, err => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Your team has been assembled! Check out dist/index.html to see!")
//         }
//     })
// };

// writeToPage();



// questionsPrompt()
//     .then(nextQuestions())
//     .then(myTeam => {
//         return generatePage(myTeam);
//     })
//     .then(pageHTML => {
//         return printPage(pageHTML);
//     })
//     .catch(err => {
//         console.log(err)
//     });












// .then(myTeam => {
    //     return generatePage(myTeam)
    // })
    // .then(samplePage => {
    //     writeToPage(samplePage);


    // })
    // .catch(err => {
    //     if (err) {
    //         console.log(err);
    //     }
    // })







// init();




// const writeToPage = function (samplePage) {
//     fs.writeFile("./dist/index.html", samplePage, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Your page has been successfully generated! Check out dist/index.html!");
//         }
//     });
// }

