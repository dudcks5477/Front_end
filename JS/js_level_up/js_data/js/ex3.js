const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers) // [1, 2, 3, 4]
console.log(numbers[1]) // 2
console.log(fruits) // ['Apple', 'Banana', 'Cherry']
console.log(fruits[2])  // Cherry

console.log('----')

// .length

console.log(numbers.length) // 4
console.log(fruits.length) // 3
console.log([1, 2].length) // 2

console.log([].length) // 0

console.log('----')

// .concat()

console.log(numbers.concat(fruits)) // [1, 2, 3, 4, "Apple", "Banana", "Cherry"]
console.log(numbers)
console.log(fruits)

console.log('----')

// .forEach()

fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
  // Apple 0 ["Apple", "Banana", "Cherry"]
  // Banana 1 ["Apple", "Banana", "Cherry"]
  // Cherry 2 ["Apple", "Banana", "Cherry"]
})

fruits.forEach(function (fruit, i) {
  console.log(fruit, i)
  // Apple 0
  // Banana 1
  // Cherry 2
})

console.log('----')

// .map()

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
  // Apple-0
  // Banana-1
  // Cherry-2
})
console.log(a) // undefined

const b = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
  // Apple-0
  // Banana-1
  // Cherry-2
})
console.log(b) // undefined

const c = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})
console.log(c) // ["Apple-0", "Banana-1", "Cherry-2"]

const d = fruits.map(function (fruit, index) {
  return {
    id: index,
    name: fruit
  }
})
console.log(d)
// 0: {id: 0, name: 'Apple'}
// 1: {id: 1, name: 'Banana'}
// 2: {id: 2, name: 'Cherry'}

const e = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
console.log(e)
// 0: {id: 0, name: 'Apple'}
// 1: {id: 1, name: 'Banana'}
// 2: {id: 2, name: 'Cherry'}

console.log('----')

// .filter()

const f = numbers.map(number => {
  return number < 3
})
console.log (f) // [true, true, false, false]

const g = numbers.map(number => number < 3)
console.log (g) // [true, true, false, false]

const h = numbers.filter(number => {
  return number < 3
})
console.log(h) // [1, 2]

const i = numbers.filter(number =>number < 3)
console.log(i) // [1, 2]

console.log(numbers)

console.log('----')

// .find() .findIndex()

const j = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(j) // Banana

const k = fruits.find(fruit => {
  return /^C/.test(fruit)
})
console.log(k) // Cherry

const l = fruits.find(fruit => /^C/.test(fruit))
console.log(l) // Cherry

const m = fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(m) // 2

const n = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(n) // 2

console.log('----')

// .includes()

const o = numbers.includes(3)
console.log(o) // true

const p = fruits.includes('CHAN')
console.log(p) // false

// .push() .unshift()
// 원본이 수정된다.

numbers.push(5)
console.log(numbers) // [1, 2, 3, 4, 5]

numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4, 5]

console.log('----')

// .reverse()
// 원본이 수정된다.

numbers.reverse()
fruits.reverse()

console.log(numbers) // [5, 4, 3, 2, 1, 0]
console.log(fruits) // ['Cherry', 'Banana', 'Apple']

console.log('----')

// .splice()
// 원본이 수정된다.

numbers.splice(2, 1)
console.log(numbers) // [5, 4, 2, 1, 0]

numbers.splice(2, 2)
console.log(numbers) // [5, 4, 0]

numbers.splice(2, 0)
console.log(numbers) // [5, 4, 0]

numbers.splice(2, 0, 999)
console.log(numbers) // [5, 4, 999, 0]

numbers.splice(2, 1, 99)
console.log(numbers) // [5, 4, 99, 0]

fruits.splice(2, 0, 'Orange')
console.log(fruits) // ["Cherry", "Banana", "Orange", "Apple"]