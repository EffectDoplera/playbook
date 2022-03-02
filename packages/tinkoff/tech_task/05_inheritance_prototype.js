function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Person.prototype.getFullName = function () {
  return `${this.lastName} ${this.firstName}`
}

function Employee(firstName, lastName, position) {
  Person.apply(this, [firstName, lastName])
  this.position = position
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

const john = new Employee('John', 'Dow', 'Investor')
console.log(john)
console.log(john.getFullName())
