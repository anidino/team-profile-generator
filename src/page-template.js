

//write html for each of 3 roles

const makeManager = function (manager) {
  return `
<div class="card col-6 border-dark bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
<div class="card-header mb-3 text-light" style="background-color: rgb(255, 0, 85)">
    <h4>${manager.name}</h4>
    <h5>Manager</h5>
  </div>
  <div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item p-2">ID: ${manager.id} </li>
  <li class="list-group-item p-2">Email: ${manager.email}</li>
  <li class="list-group-item p-2">Office Number: ${manager.officeNumber}</li>
</ul>
</div>
</div>`;
}

// getRole = function (data) {
//     const employee = data[0];
//     const role = employee.getRole();
//     if (role === "Manager") {
//         const manager = makeManager(employee)

//         myTeam.push(manager);
//     }
//     const allEmployees = myTeam.join('');
//     const pageHtmlEl = genPage(allEmployees)
//     return pageHtmlEl;
// }
const makeIntern = function () {
  return `
  <div class="card border-dark col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee2" >
    <div class="card-header mb-3 text-light" style="background-color: rgb(0, 189, 196);">
      <h4>${intern.name}</h4>
      <h5>Intern</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-2">ID: ${intern.id}</li>
        <li class="list-group-item p-2">Email: ${intern.email}</li>
        <li class="list-group-item p-2">School: ${intern.school}</li>
      </ul>
    </div>
  </div >`
}

const makeEngineer = function () {
  return `
  <div class="card border-dark col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee3">
  <div class="card-header mb-3 text-light" style="background-color: rgb(0, 255, 179);">
      <h4>${engineer.name}</h4>
      <h5>Engineer</h5>
  </div>
  <div class="card-body">
      <ul class="list-group list-group-flush">
          <li class="list-group-item p-2">ID: ${engineer.id}</li>
          <li class="list-group-item p-2">Email: ${engineer.email}</li>
          <li class="list-group-item p-2">Github: ${engineer.github}</li>
      </ul>
  </div>
</div> `
};


getRole = (team) => {
  let teamArray = [];
  console.log(team);



  for (let i = 0; i < team.length; i++) {
    const person = team[i];
    const role = person.getRole();
    console.log(role);


    if (role === "Manager") {
      const manager = makeManager(person);
      teamArray.push(manager);
    } else if (role === "Engineer") {
      const engineer = makeEngineer(person);
      teamArray.push(engineer);
    } else if (role === "Intern") {
      const intern = makeIntern(person);
      teamArray.push(intern);
    }
  }
  const allEmployees = teamArray.join("");
  const pageHtmlEl = genPage(allEmployees);
  return pageHtmlEl;
};

function genPage(pageHtmlEl) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Profile Generator</title>
  </head>
  <body>
    <header>My Team</header>
    <div class="container">
        <div class="row" id="page">
        ${pageHtmlEl}
        </div>
        </div>
      </body>
    </html>`

}




module.exports = getRole;
