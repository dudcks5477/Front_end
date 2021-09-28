const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str) // 3.14
console.log(typeof str) // string

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)  // 3
console.log(float) // 3.14
console.log(typeof integer, typeof float) // number number

console.log('----')

console.log('abs: ', Math.abs(-12)) // abs: 12
console.log('min: ', Math.min(2, 8)) // min: 2
console.log('max: ', Math.max(2, 8)) // max: 8
console.log('ceil: ', Math.ceil(3.14)) // ceil: 4 -> 올림
console.log('floor: ', Math.floor(3.14)) // floor: 3 -> 내림
console.log('round: ', Math.round(3.14)) // round: 3 -> 반올림
console.log('random: ', Math.random()) // random: 랜덤 소수