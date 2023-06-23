
class Employee {
    constructor(name,id,email) { // from super()
        
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getRole(){
        return "Employee"
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getCardHTML() {
        return ``
    }
}


module.exports = Employee;