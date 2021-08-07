const inquirer = require('inquirer');
const fs = require('fs');



function managerHtml(manager) {
  return `


<div class="card employee-card">
  <div class="card-header mb-2 bg-primary text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">${manager.getID()}</li>
        <li class="list-group-item">${manager.getOfficeNumber()}</li>
        <li class="list-group-item"> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;
}

function engineerHtml(engineer) {
  return `



  <div class="card employee-card">
  <div class="card-header mb-2 bg-primary text-white">
    <h2 class="card-title"><${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>  
    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">${engineer.getID()}</li>
        <li class="list-group-item"><a href="github.com/${engineer.getGitHubName()}">${engineer.getGitHubName()}</a></li>
        <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;
}

function internHtml(intern) {
  return `


  <div class="card employee-card">
  <div class="card-header mb-2 bg-primary text-white">
  
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>  
    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">${intern.getID()}</li>
        <li class="list-group-item">${intern.getSchoolName()}</li>
        <li class="list-group-item"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;
}

function generateHtml(employeeSpreadSheet) {
var cardHolder = []

  for (let index = 0; index < employeeSpreadSheet.length; index++) {
      employeeSpreadSheet[index].getRole()
      switch ( employeeSpreadSheet[index].getRole()) {
        case "Engineer":
            cardHolder.push(engineerHtml(employeeSpreadSheet[index]))
            break;
        case "Manager":
            cardHolder.push(managerHtml(employeeSpreadSheet[index]))
            break;
        case "Intern":
           cardHolder.push(internHtml(employeeSpreadSheet[index]))
            break;
    
        default:
            console.log("that role doesn't exist!")
            break;
    }
  }
let team = cardHolder.join("")
console.log(team)
    return (`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<title>Team</title>

<body>
<div class="container-fluid">
<div class="row">
<div class="col-12 jumbotron mb-2 bg-danger text-white team-heading">
    <h1 class="text-center">My Team</h1>
    </div>
    </div>
    </div>
<div class="container">
<div class="row">
<div class="team-area col-12 mb-2 d-flex justify-content-center">
${team}
</div>
</div>
</div>



    
</body>
</html>
    
    
    
    
    
    `)
}

module.exports = generateHtml;