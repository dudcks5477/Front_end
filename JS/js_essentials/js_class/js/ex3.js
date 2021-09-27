// ES6 Classes

/*
const chan = {
  name: 'Chan',
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

chan.normal()
chan.arrow()
*/

// ----

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const chan = new User('Chan', 'Kim')
const seock = new User('Seock', 'Kim')
const joo = new User('Joo', 'Park')

console.log(chan)
console.log(seock.getFullName())
console.log(joo.getFullName())