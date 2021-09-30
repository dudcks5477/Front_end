# JS 데이터 실습
## [가져오기, 내보내기](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data_practice/js/ex1.js)
- _와일드카드(Wildcard Character, *)_ 는 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호를 가리킨다.

----
## [Lodash 사용법](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data_practice/js/ex2.js)
- [lodash](https://lodash.com/docs/4.17.15)
### Array
  - uniq
    ```js
    _.uniq([2, 1, 2]); // => [2, 1]
    ```

----
## [JSON](https://github.com/dudcks5477/Front_end/tree/master/JS/js_level_up/js_data_practice/js/ex3.js)
- [JSON 위키백과](https://ko.wikipedia.org/wiki/JSON)
  - 자바스크립트의 객체 표기법
  - _JSON_ (_제이슨_, JavaScript Object Notation)은 **속성-값 쌍** (attritube-value pairs and array data types (or any other serializable value)) 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 ~~개방형 표준~~ 포맷이다.
  - 비동기 브라우저/서버 통신 (~~AJAX~~)을 위해, 넓게는 ~~XML~~(~~AJAX~~가 사용)을 대체하는 주요 데이터 포맷이다.
  - ~~인터넷~~에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.
  - 자료의 종류에 큰 제한은 없으며, 특히 ~~컴퓨터 프로그램~~의 ~~변수~~값을 표현하는데 적합하다.
  - JSON의 공식 인터넷 미디어 타입은 <u>application/json</u>이며, JSON의 파일 확장자는 <u>.json</u>이다.
  - 자료형과 문법
    - 기본 자료형
      - 수(Number)
      - ~~문자열(String)~~: 0개 이상의 ~~유니코드~~ 문자들의 연속, 문자열은 큰 따옴표("")로 구분하여 역슬래시 ~~이스케이프~~ 문법을 지원한다.
      - ~~참/거짓(Boolean)~~: <u>true</u> 또는 <u>false</u> 값
      - ~~배열(Array)~~: 0 이상의 임의의 종류의 값으로 이루어진 ~~순서가 있는 리스트~~, 대괄호로 나타내며 요소는 쉼표로 구분한다.
      - 객체(Object): 순서가 없는 이름/값 쌍의 집합으로, 이름(키)이 문자열이다.
      - ~~<u>null</u>~~: 빈 값으로 <u>null</u>을 사용한다.