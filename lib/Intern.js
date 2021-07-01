const Employee = require('./Employee')

class Intern {
    constructor(id, email, name, school ) {
        super(id, email, name)
        this.school = school;   
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
    
}

module.exports = Intern