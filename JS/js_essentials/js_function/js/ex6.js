// 콜백(Callback)

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('CHAN!')
    callback()
  }, 3000)
}
timeout(() => {
  console.log('DONE!')
})