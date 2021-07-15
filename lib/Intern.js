const Employee = require('./Employee')

class Intern extends Employee {
    constructor(id, email, name, school ) {
        super(id, email, name)
        this.school = school;   
    }

    getSchoolName() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
    
}

module.exports = Intern