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