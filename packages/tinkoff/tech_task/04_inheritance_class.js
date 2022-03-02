class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor (firstName, lastName, position) {
    super(firstName, lastName)
    this.position = position
  }
}

const john = new Employee('John', 'Dow', 'Investor')

console.log(john)
console.log(john.getFullName())
