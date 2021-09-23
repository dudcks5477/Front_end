// 비교 연산자(comparison operator)

const a = 13
const b = 13

/** console.log(a === b) // 일치 연산자
*
* function isEqual(x, y) {
* return x === y
* }
*
* console.log(isEqual(1, 1))
* console.log(isEqual(2, '2'))
*/

console.log(a !== b) // 불일치 연산자

console.log('----')

console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)

console.log('----')

// 논리 연산자(logical operator)

const c = 1 === 12
const d = 'AB' === 'ABC'
const e = false

console.log(c)
console.log(d)
console.log(e)

console.log('&&:', c && d && e) // 그리고(and) 연산자
console.log('&&:', c && e)
console.log('||:', c || d || e) // 또는(or) 연산자
console.log('||:', c || d) 
console.log('!:', c) 
console.log('!:', !c) // 부정(not) 연산자