function managerHtml(manager) {
  return `



<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
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



<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title"><${engineer.getName()}/h2>
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



<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
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

function generateHtml() {
    return (`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
    <title>Document</title>
</head>
<body>
    
</body>
</html>
    
    
    
    
    
    `)
}