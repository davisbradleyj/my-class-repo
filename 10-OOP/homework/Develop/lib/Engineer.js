// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("Employee")
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = "Engineer"
    }
    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Engineer;