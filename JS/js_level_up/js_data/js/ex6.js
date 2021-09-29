// 전개 연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits) // ["Apple", "Banana", "Cherry"]
console.log(...fruits) // Apple Banana Cherry
// console.log('Apple', 'Banana', 'Cherry')

const toObject = (a, b, ...c) => ({ a, b, c }) // ...c -> rest parameter : 나머지 매개변수
console.log(toObject(...fruits)) // { a: "Apple", b: "Banana", c: "Cherry" }
console.log(toObject(fruits[0], fruits[1], fruits[2])) // { a: "Apple", b: "Banana", c: "Cherry" }