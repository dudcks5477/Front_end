// 함수 복습

function sum(x, y) {
  console.log(x + y)
}

sum(1, 3)
sum(4, 12)

console.log('----')

function sum2(x, y) {
  return x + y
}

const a = sum2(2, 4)
const b = sum2(5, 13)

console.log(a)
console.log(b)
console.log(a + b)

console.log('----')

console.log(sum2(3, 5))
console.log(sum2(6, 14))
console.log(sum2(3, 5) + sum2(6, 14))

console.log('----')

function sum3(x, y) {
  if (x < 2) {
    return
  }
  return x + y // return은 반환과 함수의 종료를 뜻함
  // console.log(x) // 실행되지 않음
}

console.log(sum3(7, 3))

console.log('----')

function sum4() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(sum4(7, 3))