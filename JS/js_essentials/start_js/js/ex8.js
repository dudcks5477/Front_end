// 변수 유효범위(Variable Scope)

function scope() {
  // console.log(a) // ReferenceError
  if (true) {
    // console.log(a) // undefiend
    const a = 123 // const와 let은 동일
    console.log(a) // 123
  }
  // console.log(a) // ReferenceError
}
scope()

console.log('----')

function scope2() {
  // console.log(a) // undefiend
  if (true) {
    // console.log(a) // undefiend
    var a = 123 
    console.log(a) // 123
  }
  // console.log(a) // 123
}
scope2()