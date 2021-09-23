# JS 시작하기
## 개요(ECMAScript) 및 프로젝트 초기화
- [ECMA](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
## [데이터 타입 확인](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex1.js)
## [산술, 할당 연산자](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex2.js)
## [비교, 논리 연산자](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex3.js)
## [삼항 연산자](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex4.js)
## [조건문 if Else](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex5.js)
```javascript
Math.random() // 무작위의 소수
Math.random() * 10 // 무작위 정수부분 출력
Maht.floor(Math.random() * 10) // floor를 통해 소수점을 내림(버림)
```
## [조건문 Switch](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex6.js)
## [반복문 For](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex7.js)
- for (시작조건; 종료조건; 변화조건) {}
## [변수 유효범위](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex8.js)
- var, let, const
  - let, const : 블록 레벨
  - var : 함수 레벨
## [형 변환](https://github.com/dudcks5477/Front_end/blob/master/JS/js_essentials/start_js/js/ex9.js)
- Truthy(참 같은 값)
  - true, {}, [], 1, 2, 'false', -12, '3.14', ...
- Falsy(거짓 같은 값)
  - false, '', null, undefiend, 0, -0, NaN
  ```javascript
  1 + undefiend // NaN(Not a Number, 숫자데이터지만 숫자가 아니다.)
  ```