// IIFE

const a = 7
function double() {
  console.log(a * 2)
}
double();

// 즉시실행함수를 사용할 때는 앞에 double(); 처럼 구분을 해줘야함
(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}());