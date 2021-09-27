const chan = {
  firstName: 'Chan',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(chan.getFullName())

const seock = {
  firstName: 'Seock',
  lastName: 'Kim',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(seock.getFullName())

const joo = {
  firstName: 'Joo',
  lastName: 'Park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(joo.getFullName())

// --- 

function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const chan2 = new User('Chan', 'Kim') // user -> 생성자 함수
const seock2 = new User('Secok', 'Kim')
const joo2 = new User('Joo', 'Park') // 생성자 앞에 선언된 변수들은 인스턴스라고 부름

console.log(chan2.getFullName())
console.log(seock2.getFullName())
console.log(joo2.getFullName())