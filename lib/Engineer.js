const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(id, email, name, gitHub) {
        super(id, email, name) 
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub
    }
    
    getRole() {
        return "Engineer"
    }
    
}

module.exports = Engineer;