const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email); // this.name, this.id, this.email
        this.officeNumber = officeNumber;

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
                <b>Office Number: </b>
                <span> <a href="#">${this.officeNumber}</a></span>
            </div>
        </div>
        `
    }
}

module.exports = Manager;