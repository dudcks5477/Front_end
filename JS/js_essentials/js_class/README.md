# JS 클래스
## [생성자 함수(prototype)](https://github.com/dudcks5477/Front_end/tree/master/JS/js_essentials/js_class/js/ex1.js)
- 객체와 속성들을 합쳐서 멤버(Member)라고 부름
```js
const a = [1, 2, 3]
a // [1, 2, 3]
a.includes(4) // false
a.includes(2) // true
```
- 배열 데이터 안에는 prototype 만들어진 다양한 메소드들이 있다.
## [this](https://github.com/dudcks5477/Front_end/tree/master/JS/js_essentials/js_class/js/ex2.js)
- 일반(Normal) 함수는 _호출 위치_ 에서 따라 this 정의
- 화살표(Arrow) 함수는 자신이 선언된 _함수 범위_ 에서 this 정의