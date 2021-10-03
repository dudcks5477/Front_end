let str = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
d
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

console.log(str.match(/d$/gm))
console.log(str.match(/^T/gm))

console.log('----')

console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g))

console.log('----')

console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\w{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))

console.log('----')

console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log('----')
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))

const h = `   the hello world     ! 

`
console.log(h.replace(/\s/g, ''))

console.log('----')

const str2 = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(str2.match(/.{1,}(?=@)/g))
console.log(str2.match(/(?<=@).{1,}/g))