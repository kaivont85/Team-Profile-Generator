const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const htmlTemplates = require("./src/htmltemplates")

var allEmployees = []



function employeePreference() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what kind of employee would you like to add next?",
            choices: ["Engineer", "Manager", "Intern", "none"]
        }
    ]). then((responses) => {
        switch (responses.role) {
            case "Engineer":
                engineerQuestions()
                break;
            case "Manager":
                managerQuestions()
                break;
            case "Intern":
                internQuestions()
                break;
        
            default:
                console.log("thanks for using our system!")
           fs.writeFileSync(path.join(__dirname, "team.html"), htmlTemplates(allEmployees), "utf-8" )     
                break;
        }
    }) 
}

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the employee's office number?",
      },
    ])
    .then((responses) => {
      var manager = new Manager(
        responses.managerName,
        responses.managerEmail,
        responses.managerId,
        responses.managerOfficeNumber
      );
      allEmployees.push(manager)
      employeePreference()
    });
}
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the engineer's github?",
      },
    ])
    .then((responses) => {
      
      var engineer = new Engineer(
        responses.engineerName,
        responses.engineerEmail,
        responses.engineerId,
        responses.engineerGitHub
      );
      allEmployees.push(engineer)
      employeePreference()
    });
    
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "internSchoolName",
        message: "What is the name of the intern's school?",
      },
    ])
    .then((responses) => {

      var intern = new Intern(
        responses.internName,
        responses.internEmail,
        responses.internId,
        responses.internSchoolName
      );
      allEmployees.push(intern)
      employeePreference()
    });
}

managerQuestions();
