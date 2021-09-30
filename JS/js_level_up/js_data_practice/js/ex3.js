// JSON (JavaScript Object Notation)

import myData from './myData.json'

console.log(myData)

const user = {
  name: 'CHAN',
  age: 98,
  emails: [
    'rladudcks5477@gmail.com',
    'mogoc@gmail.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str) // str {"name":"CHAN","age":98,"emails":["rladudcks5477@gmail.com","mogoc@gmail.com"]}
console.log(typeof str) // string

const obj = JSON.parse(str)
console.log('obj', obj) // obj {name: 'CHAN', age: 98, emails: Array(2)}