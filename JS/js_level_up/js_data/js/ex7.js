// 데이터 불변성(Immutability)

let a = 1
let b = 4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)

console.log('----') 

let d = { k: 1 }
let e = { k: 1 }
console.log(d, e, d === e)
d.k = 7
e = d
console.log(d, e, d === e)
d.k = 2
console.log(d, e, d === e)
let f = e
console.log(d, e, f, d === f)
d.k = 9
console.log(d, e, f, d === f)
