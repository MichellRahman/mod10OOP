const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github) { // from calling new Engineer
        super(name,id,email); // this.name, this.id, this.email
        this.github = github;

    }
    getCardHTML() {
        return `
        <div class="card">
            <div>
                <b>Employee ID: </b>
                <span> ${this.id}</span>
            </div>
            <div>
                <b>Name: </b>
                <span> ${this.name}</span>
            </div>
            <div>
                <b>Email: </b>
                <span> ${this.email}</span>
            </div>
            <div>
                <b>Github: </b>
                <span> <a href="#">${this.github}</a></span>
            </div>
        </div>
        `
    }
}


module.exports = Engineer;