# JS 선행
## <a href="https://github.com/dudcks5477/Front-end/tree/master/JS/js_antecedent/js/ex1.js">개요</a>
- 표기법
  - dash-case(kebab-case)
    - HTML, CSS
    - the-quick-brown-fox-jumps-over-the-lazy-dog
  - snake_case
    - HTML, CSS
    - the_quick_brown_fox_jumps_over_the_lazy_dog
  - camelCase
    - JS
    - theQuickBrownFoxJumpsOverTheLazyDog
  - ParcelCase
    - JS
    - TheQuickBrownFoxJumpsOverTheLazyDog
- Zero-based Numbering
  - 0 기반 번호 매기기
  - 특수한 경우를 제외하고 0부터 숫자를 시작한다.
  ```js
  let fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(fruits[0]); // 'Apple'
  console.log(fruits[1]); // 'Banana'
  console.log(fruits[2]); // 'Cherry'

  console.log(new Date('2021-01-30').getDay()); // 6, 토요일
  console.log(new Date('2021-01-31').getDay()); // 0, 일요일
  console.log(new Date('2021-02-01').getDay()); // 1, 월요일
  ```
- 주석 (Comment)
  ```js
  // 한 줄 메모
  /* 한 줄 메모 */

  /**
   * 여러 줄
   * 메모1
   * 메모2
   */
  ```
----

## <a href="https://github.com/dudcks5477/Front-end/tree/master/JS/js_antecedent/js/ex2.js">데이터 종류</a>
- 데이터 종류(자료형)
  - String
  ```js
  // String(문자 데이터)
  // 따옴표를 사용한다.
  let myNmae = "CHAN";
  let email = 'rladudcks5477@gmail.com';
  let hello = `Hello ${myNmae}?!`

  console.log(myName); // CHAN
  console.log(email); // rladudcks5477@gmail.com
  console.log(hello); // Hello CHAN?!
  ```
  - Number
  ```js
  // Number(숫자 데이터)
  // 정수 및 부동소수점 숫자를 나타낸다.
  let number = 123;
  let opacity = 1.57;

  console.log(number); // 123
  console.log(opacity); // 1.57
  ```
  - Boolean
  ```js
  // Boolean(불린 데이터)
  // true, false 두 가지 값밖에 없는 논리 데이터이다.
  let checked = true;
  let isShow = false;

  console.log(checked); // true
  console.log(isShow); // false
  ```
  - Undefined
  ```js
  // Undefiend
  // 값이 할당되지 않은 상태를 나타낸다.
  let undef;
  let obj = { abc: 123 };

  console.log(undef); // undefiend
  console.log(obj.abc); // 123
  console.log(obj.xyz); // undefiend
  ```
  - Null
  ```js
  // Null
  // 어떤 값이 의도적으로 비어있음을 의미한다.
  let empty = null;

  console.log(empty); // null
  ```
  - Object
  ```js
  // Object
  // 여러 데이터를 Key:Value 형태로 저장한다. { }
  let user = {
    // Key: Value,
    name: 'CHAN',
    age: 98,
    isValid: true
  };

  console.log(user.name); // CHAN
  console.log(user.age); // 98
  console.log(user.isValid); // true
  ```
  - Array
  ```js
  // Array(배열 데이터)
  // 여러 데이터를 순차적으로 저장한다. [ ]
  let fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(fruits[0]); // 'Apple'
  console.log(fruits[1]); // 'Banana'
  console.log(fruits[2]); // 'Cherry'
  ```
----

## 변수, 예약어
- 변수
  - 데이터를 저장하고 참조(사용)하는 **데이터의 이름**
  - **var, let, const**
  ```js
  // 재사용이 가능
  // 변수 선언
  let a = 2;
  let b = 5;

  console.log(a + b); // 7
  console.log(a - b); // -3
  console.log(a * b); // 10
  console.log(a / b); // 0.4

  // 값(데이터)의 재할당 가능
  let a = 12;
  console.log(a); // 12

  a = 999;
  console.log(a); // 999

  // 값(데이터)의 재할당 불가
  const a = 12;
  console.log(a); // 12

  a = 999;
  console.log(a); // TypeError: Assignment to constant variable.
  ```
- 예약어
  - **특별한 의미** 를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
  - **Reserved Word**
  ```js
  let this = 'Hello'; // SyntaxError
  let if = 123; // SyntaxError
  let break = true; // SyntaxError
  ```
----

## 함수
- 특정 동작(기능)을 수행하는 일부 코드의 **집합**(부분)
- **function**
```js
// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234
```
```js
function returnFunc() {
  return 123;
}

let a = returnFunc();

console.log(a); // 123
```
```js
// 함수 선언
function sum(a, b) { // a와 b는 매개변수(Parameters)
  return a + b;
}

// 재사용
let a = sum(1, 2); // 1과 2는 인수(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c); // 3, 19, 6
```
```js
// 기명(이름이 있는) 함수
// 함수 선언
function hello() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현
let world = function () {
  console.log('World~');
}

// 함수 호출
hello(); // Hello~
world(); // World~
```
```js
// 객체 데이터
const chan = {
  name: 'CHAN',
  age: 98,
  // 메소드(Method)
  getName: function() {
    return this.name;
  }
};

const hisName = chan.getName();
console.log(hisName); // CHAN
// 혹은
console.log(chan.getName()); // CHAN
```
----

## 조건문
- 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문
- **if, else**
```js
let isShow = true;
let checked = false;

if (isShow) {
  console.log('Show!'); // Show!
}

if (checked) {
  console.log('Checked!');
}
```
```js
let isShow = true;

if (isShow) {
  console.log('Show!');
} else {
  console.log('Hide?');
}
```
----
## <a href="https://github.com/dudcks5477/Front-end/tree/master/JS/js_antecedent/js/ex3.js">DOM API</a>
- Document Object Model, Application Programming Interface
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./main.js"></script>
</head>
<body>
  <div class="box">BOX!!</div>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="box">BOX!!</div>
  <script src="./main.js"></script>
</body>
</html>
```
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script defer src="./main.js"></script>
</head>
<body>
  <div class="box">BOX!!</div>
</body>
</html>
```
```js
// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드
boxEl.addEventListener();

// 인수(Arguments)를 추가 가능
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
  console.log('Click~!');
});
```
```js
// HTML 요소(Element) 검색/찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false
```
```js
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box')
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl) : 반복 중인 요소
// 두 번째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});
```
```js
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box

// Setter, 값을 지정하는 용도
boxEl.textContent = 'CHAN';
console.log(boxEl.textContent); // CHAN
```