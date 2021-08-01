function managerHtml(manager) {
  return `


<div class="container">
  <div class="row"><div class="col-6">
<div class="card mc-auto mb-3" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title">${manager.getName()}</h2>
    <h5 class="card-title">${manager.getRole()}</h5>
    <ul class="card-text">
        <li>${manager.getID()}</li>
        <li>${manager.getOfficeNumber()}</li>
        <li> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;
}

function engineerHtml(engineer) {
  return `



<div class="container">
  <div class="row"><div class="col-6">
<div class="card mc-auto mb-3" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title"><${engineer.getName()}</h2>
    <h5 class="card-title">${engineer.getRole()}</h5>
    <ul class="card-text">
        <li>${engineer.getID()}</li>
        <li> <a href="github.com/${engineer.getGitHubName()}">/a>${engineer.getGitHubName()}</a></li>
        <li> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    </ul>
  </div>
</div>
`;
}

function internHtml(intern) {
  return `


<div class="container">
  <div class="row"><div class="col-6">
<div class="card mc-auto mb-3" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title">${intern.getName()}</h2>
    <h5 class="card-title">${intern.getRole()}</h5>
    <ul class="card-text">
        <li>${intern.getID()}</li>
        <li>${intern.getSchoolName()}</li>
        <li> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
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
    <title>Title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>

<div class="jumbotron jumbotron-fluid" style='background-color: #ff0000;'>
<div class="container">
  <h1 class="display-4 text-center">My Team</h1>
</div>
</div>

${team}
    
</body>
</html>
    
    
    
    
    
    `)
}
module.exports = generateHtml;