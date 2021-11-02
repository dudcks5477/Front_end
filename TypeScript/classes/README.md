# Classes
## What are Classes
- object를 만드는 blueprint (청사진, 설계도)
- 클래스 이전에 object를 만드는 기본적인 방법은 function
- JavaScript에도 class는 es6부터 사용 가능
- OOP을 위한 초석
- TypeScript에서는 클래스도 사용자가 만드는 타입의 하나

----
## [Quick Start - class](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/classes/example.ts)
```bash
$ npm init -y
$ npm i typescript -D
$ npx tsc --init
$ npx tsc
```
- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다.
- new를 이용하여 class를 통해 object를 만들 수 있다.
- constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
- this를 이용해서 만들어진 object를 카리킬 수 있다.
- JS로 컴파일되면 es5의 경우 function으로 변경된다.

----
## [Constructor & initialize](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/classes/example2.ts)
- 생성자 함수가 없으면, 디폴트 생성자가 불린다.
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 ! 를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
- 생성자에는 async 를 설정할 수 없다.

----
## [접근 제어자 (Access Modifiers)](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/classes/example3.ts)
- 접근 제어자에는 public, private, protected가 있다.
- 설정하지 않으면 public 이다.
- 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
- private으로 설정하면 클래스 외부에서 접근할 수 없다.
- 자바스크립트에서 private 지원하지 않아 오랜동안 프로퍼티나 메서드 이름 앞에 _를 붙여서 표현했다.

----
## [Initialization in constructor parameters](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/classes/example4.ts)

----
## [Getters & Setters](https://github.com/dudcks5477/Front_end/tree/master/TypeScript/classes/example5.ts)