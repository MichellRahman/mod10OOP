// const anEmployee = new Intern("JR", 3, "jr@jr.com", "University of LA") // {name,id,email,school}

const inquirer = require("inquirer"); // import
const fs = require("fs"); // import
let employeeCount = 0; // Plan: increment, and save as the employee ID of each new employee
let employeeList = []; // Plan: Use .push
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
function managerQuestions() {
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter manager's name",
        name: "managerName"
      },
      {
        type: "input",
        message: "Enter manager's email address",
        name: "managerEmail"
      },
      {
        type: "input",
        message: "Enter manager's office number",
        name: "managerOffice"
      }
    ])
    .then(({managerName,managerEmail,managerOffice}) => {
      // Use user feedback for... whatever!!
      employeeCount++;
      let anEmployee = new Manager(managerName,employeeCount,managerEmail,managerOffice)
      employeeList.push(anEmployee)

      console.log({managerName,employeeCount,managerEmail,managerOffice})
      mainQuestions();
    });
} // Ends managerQuestions

function mainQuestions() {
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do next?",
            name: "userChoice",
            choices: [
                "Add Engineer",
                "Add Intern",
                "Finish building my team"
            ]
          },
    ]).then(answers=>{
        // data.typeOfEmployee
        switch(answers.userChoice) {
            case "Add Engineer":
                engineerQuestions();
                break;
            case "Add Intern":
                internQuestions();
                break;
            case "Finish building my team":
                createTeamPage()
                break;

        }
    })
}
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's name",
            name: "internName"
          },
          {
            type: "input",
            message: "Enter intern's email address",
            name: "internEmail"
          },
          {
            type: "input",
            message: "Enter intern's school",
            name: "internSchool"
          }
    ]).then(({internName, internEmail, internSchool})=>{
        employeeCount++
        let anEmployee = new Intern(internName, employeeCount, internEmail, internSchool)
      employeeList.push(anEmployee)

      console.log({internName, internEmail, internSchool})
      mainQuestions();
    })
}
function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer's name",
            name: "engineerName"
          },
          {
            type: "input",
            message: "Enter engineer's email address",
            name: "engineerEmail"
          },
          {
            type: "input",
            message: "Enter engineer's github",
            name: "engineerGithub"
          }
    ]).then(({engineerName, engineerEmail, engineerGithub})=>{
        employeeCount++
        let anEmployee = new Engineer(engineerName, employeeCount, engineerEmail, engineerGithub)
      employeeList.push(anEmployee)

      console.log({engineerName, engineerEmail, engineerGithub})
      mainQuestions();
    })
}

function createTeamPage() {
    let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="container">
    <h1>Team Profile</h1>
        <div class="cards">
            ${
                employeeList.map(ae=>ae.getCardHTML())
            }
        </div>
    </div>
</body>
</html>
    `;
    fs.writeFile("team.html", html, "utf-8", (err)=>{})
}

managerQuestions();