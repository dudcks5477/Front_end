# JS 데이터
- String: "", '', ``
- Number
- Boolean: true, false
- undefiend
- null
- Array: []
- Object: {}
- MDN Web Docs 참조

----
## [문자](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex1.js)
- [String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 전역객체는 문자열(문자의 나열)의 생성자이다.
### Properties
  - String length
### Methods
  - String.prototype.indexOf()
    - _indexOf()_ 메서드는 호출한 _String_ 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환한다.
    - 일치하는 값이 없으면 -1을 반환한다.
    ```js
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    // expected output : "The index of the first "dog" from the beginning is 40"

    console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1))}`);
    // expected output : "The index of the 2nd "dog" is 52"
    ```
    - #### 매개변수
      - searchValue
        - 찾으려는 문자열. 아무 값도 주어지지 않으면 문자열 "_undefiend_"를 찾으려는 문자열로 사용한다.
    - #### 반환 값
      - _searchValue_ 의 첫 번째 등장 인덱스, 찾을 수 없으면 -1
  - String.prototype.slice()
    - _slice()_ 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환한다.
    - #### 매개변수
      - beginIndex
      - endIndex
        - 0부터 시작하는 추출 종료점 인덱스로 그 직전까지 추출된다.
  - 정규표현식(RegExp)

----
## [숫자와 수학](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex2.js)
### [Math](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)
  -  _Math_ 는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체이다.
#### Methods
  - Math.abs()
    - _Math.abs()_ 함수는 주어진 숫자의 절대값을 반환한다.
    - 매개변수
      - **x**
      - 숫자
    - 반환 값
      - 주어진 숫자의 절대값

----
## [배열](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex3.js)
### [Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
#### Properties
  - Array.prototype.length
#### Methods
  - Array.prototype.find()
    - _find()_ 메서드는 주어진 판별 함수를 만족하는 **첫 번째 요소** 의 **값** 을 반환한다.
    - 그런 요소가 없다면 _undefiend_ 를 반환한다.
    ```js
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    console.log(found); // expected output: 12
    ```
    - 매개변수
      -  callback : 배열의 각 값에 대해 실행할 함수
  - 자바스크립트 데이터 불변성

----
## [객체](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex4.js)
### [Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
#### Method
  - prototype이 붙어있지 않다면 정적(static) 메소드다.
  - Object.assign()
    - _Object.assign()_ 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용한다.
    - 대상 객체를 반환한다.
    ```js
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target); // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5 }
    ```
    - 매개변수
      - target : 대상 객체
      - sources : 하나 이상의 출처 객체
    - 반환 값 : 대상 객체

----
## [구조 분해 할당](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex5.js)

----
## [전개 연산자](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex6.js)
  - ...( ) 처럼 사용함

----
## [불변성](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex7.js)
  - 원시 데이터: String, Number, Boolean, undefiend, null
  - 참조형 데이터: Object, Array, Function
    - 불변성이 없다. (가변한다.)

## [얕은 복사와 깊은 복사](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data/js/ex8.js)
  - 깊은 복사는 lodash라는 패키지의 도움을 받아 실행함
  ```bash
  $ npm install lodash
  ```
### [lodash Document](https://lodash.com/docs/4.17.15)
  - _.cloneDeep(value)
    - This method is like __.clone_ except that it recursively clones _value_.
    - 재귀 : 반복 실행이라고 생각
    ```js
    var objects = [{ 'a': 1 }, { 'b': 2 }];

    var deep = _.cloneDeep(objects);
    console.log(deep[0] === objects[0]); // => false
    ```