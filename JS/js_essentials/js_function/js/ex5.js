// 타이머 함수

const timer = setTimeout(() => {
  console.log('CHAN!')
}, 3000) // 3000ms -> 3초

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timer2 = setInterval(() => {
  console.log('SEOCK')
}, 3000)

h1El.addEventListener('click', () => {
  clearInterval(timer2)
})