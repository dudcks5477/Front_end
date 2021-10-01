const str = `
010-1234-5678
rladudcks5477@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', '')
// console.log(str.match(regexp)) // ['the', index: 120, input: '\n010-1234-5678\nrladudcks5477@gmail.com\nhttps://www…ck brown fox jumps over the lazy dog.\nabbcccdddd\n', groups: undefined]

// const regexp = new RegExp('the', 'g')
// console.log(str.match(regexp)) // ['the']

// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp)) // ['The', 'the']

const regexp = /the/gi
console.log(str.match(regexp)) // ['The', 'the']