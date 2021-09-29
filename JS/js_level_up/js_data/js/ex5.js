// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Chan',
  age: 98,
  email: 'rladudcks5477@gmail.com',
  address: 'USA'
}
const { name: chan, age, address = 'Korea' } = user
// E.g, user.address

console.log(`사용자의 이름은 ${chan}입니다.`)
console.log(`${chan}의 나이는 ${age}세입니다.`)
console.log(`${chan}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [, , b] = fruits
console.log(b) // Apple Banana Cherry undefiend
