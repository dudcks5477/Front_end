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

## <a href="https://github.com/dudcks5477/Front-end/tree/master/JS/js_antecedent/js/ex1.js">데이터 종류</a>
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