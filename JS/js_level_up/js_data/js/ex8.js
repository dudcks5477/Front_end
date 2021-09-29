import _ from 'lodash'

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'Chan',
  age: 98,
  emails: ['rladudcks5477@gmail.com']
}
// const copyUser = Object.assign({}, user)
// const copyUser = {...user} // 얕은 복사
const copyUser = _.cloneDeep(user) // 깊은 복사 (_ -> lodash)
console.log(copyUser === user)

user.age = 24
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('mogoc@gmail.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
