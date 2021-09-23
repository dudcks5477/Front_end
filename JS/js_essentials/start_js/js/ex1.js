import getType from './getType'

console.log(typeof 'Hello World!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

console.log('----')

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))