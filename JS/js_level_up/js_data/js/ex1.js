/*
const result = 'Hello world!'.indexOf('chan') // -1
console.log(result)

// String.prototype.indexOf()
*/

const str = '0123'

console.log(str.length) // 4
console.log('0123'.length) // 4
console.log('01 23'.length) // 5

console.log('----')

const str2 = 'Hello world!'
console.log(str2.indexOf('world!')) // 6
console.log(str2.indexOf('CHAN')) // -1
console.log(str2.indexOf('CHAN') !== -1) // false

console.log('----')

const str3 = 'Hello world!'
console.log(str3.slice(0, 3)) // Hel
console.log(str3.slice(6, 11)) // world

console.log('----')

const str4 = 'Hello world!'
console.log(str4.replace('world', 'CHAN')) // Hello CHAN!
console.log(str4.replace(' world!', '')) // Hello

console.log('----')

const str5 = 'rladudcks5477@gmail.com'
console.log(str5.match(/.+(?=@)/)[0]) // rladudcks5477

console.log('----')

const str6 = '    Hello world   '
console.log(str6.trim()) // Hello world -> 양 옆 공백이 사라짐