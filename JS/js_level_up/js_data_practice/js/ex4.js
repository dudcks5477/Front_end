const user = {
  name: 'CHAN',
  age: 98,
  emails: [
    'rladudcks5477@gmail.com',
    'mogoc@gmail.com'
  ]
}

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 24
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))