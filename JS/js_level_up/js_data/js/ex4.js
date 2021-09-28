const userAge = {
  // key: value
  name: 'Chan',
  age: 98
}
const userEmail = {
  name: 'Chan',
  email: 'rladudcks5477@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target) // Object { name: 'Chan', age: 98, email: 'rladudcks5477@gmail.com' }
console.log(userAge) // Object { name: 'Chan', age: 98, email: 'rladudcks5477@gmail.com'
console.log(target === userAge) // true

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // false

console.log('----')

const user = {
  name: 'Chan',
  age: 98,
  email: 'rladudcks5477@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']

console.log(user['email']) // rladudcks5477@gmail.com

const values = keys.map(key => user[key])
console.log(values) // ['Chan', 98, 'rladudcks5477@gmail.com]