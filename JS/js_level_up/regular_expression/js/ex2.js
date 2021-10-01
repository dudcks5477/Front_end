const str = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = /fox/gi
console.log(regexp.test(str)) // true

const regexp1 = /SEOCK/gi
console.log(regexp.test(str)) // false

console.log(str.replace(regexp, 'AAA'))
console.log(str)

console.log('----')

let str2 = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp2 = /fox/gi
str2 = str2.replace(regexp, 'AAA')
console.log(str2)